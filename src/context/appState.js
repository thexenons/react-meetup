import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useFetch } from "../util-hooks/useFetch";

const initialAppState = { favorites: [], meetups: [] };

const AppStateContext = createContext(initialAppState);

const APP_STATE_REDUCER_ACTIONS = {
  UPDATE_MEETUPS: "UPDATE_MEETUPS",
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
};

const LOCALSTORAGE_MEETUP_KEY = "meetup-favorites";

const appStateReducer = (state, action) => {
  switch (action.type) {
    case APP_STATE_REDUCER_ACTIONS.UPDATE_MEETUPS:
      return { ...state, meetups: action.payload };

    case APP_STATE_REDUCER_ACTIONS.ADD_FAVORITE:
      const addFavoriteNewFavorites = [...state.favorites, action.payload];

      localStorage.setItem(
        LOCALSTORAGE_MEETUP_KEY,
        JSON.stringify(addFavoriteNewFavorites)
      );

      return {
        ...state,
        favorites: addFavoriteNewFavorites,
      };

    case APP_STATE_REDUCER_ACTIONS.DELETE_FAVORITE:
      const deleteFavoriteNewFavorites = state.favorites.filter(
        (favorite) => favorite !== action.payload
      );
      localStorage.setItem(
        LOCALSTORAGE_MEETUP_KEY,
        JSON.stringify(deleteFavoriteNewFavorites)
      );

      return {
        ...state,
        favorites: deleteFavoriteNewFavorites,
      };

    default:
      return state;
  }
};

const initializeAppState = () => {
  const lsFavorites = localStorage.getItem(LOCALSTORAGE_MEETUP_KEY);
  let initialFavorites = [];
  if (lsFavorites) {
    try {
      initialFavorites = JSON.parse(lsFavorites);
    } catch (e) {
      localStorage.setItem(LOCALSTORAGE_MEETUP_KEY, JSON.stringify([]));
    }
  } else {
    localStorage.setItem(LOCALSTORAGE_MEETUP_KEY, JSON.stringify([]));
  }

  return { favorites: initialFavorites, meetups: [] };
};

export const AppStateProvider = ({ children }) => {
  const { data, isLoading } = useFetch({
    url: "/data.json",
  });

  const [appState, dispatch] = useReducer(
    appStateReducer,
    { ...initialAppState, meetups: data || [] },
    initializeAppState
  );

  useEffect(() => {
    if (!!data?.length && data !== appState.data) {
      dispatch({
        type: APP_STATE_REDUCER_ACTIONS.UPDATE_MEETUPS,
        payload: data,
      });
    }
  }, [appState.data, data]);
  console.log({ appState });

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
    () => ({ ...appState, isLoading, addFavorite, deleteFavorite }),
    [addFavorite, appState, deleteFavorite, isLoading]
  );

  return (
    <AppStateContext.Provider value={returnValue}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
