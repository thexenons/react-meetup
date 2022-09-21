import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const initialAppState = { favorites: [] };

const AppStateContext = createContext(initialAppState);

const APP_STATE_REDUCER_ACTIONS = {
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
};

const appStateReducer = (state, action) => {
  switch (action.type) {
    case APP_STATE_REDUCER_ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case APP_STATE_REDUCER_ACTIONS.DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initializeAppState = () => {
  const lsFavorites = localStorage.getItem("meetup-favorites");
  let initialFavorites = [];
  if (lsFavorites) {
    try {
      initialFavorites = JSON.parse(lsFavorites);
    } catch (e) {
      localStorage.setItem("meetup-favorites", JSON.stringify([]));
    }
  } else {
    localStorage.setItem("meetup-favorites", JSON.stringify([]));
  }

  return initialFavorites;
};

export const AppStateProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(
    appStateReducer,
    initialAppState,
    initializeAppState
  );

  const addFavorite = useCallback((meetup) => {
    dispatch({ type: APP_STATE_REDUCER_ACTIONS.ADD_FAVORITE, payload: meetup });
  }, []);
  const deleteFavorite = useCallback((meetupId) => {
    dispatch({
      type: APP_STATE_REDUCER_ACTIONS.DELETE_FAVORITE,
      payload: meetupId,
    });
  }, []);

  const returnValue = useMemo(
    () => ({ ...appState, addFavorite, deleteFavorite }),
    [addFavorite, appState, deleteFavorite]
  );

  return (
    <AppStateContext.Provider value={returnValue}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
