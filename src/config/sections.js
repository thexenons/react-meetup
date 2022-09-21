import NewMeetupForm from "../components/meetups/NewMeetupForm";
import AllMeetupsPage from "../pages/AllMeetupsPage";
import FavoritesPage from "../pages/Favorites";

export const ALL_MEETUPS = "ALL_MEETUPS";
export const NEW_MEETUP = "NEW_MEETUP";
export const FAVORITES = "FAVORITES";

const SECTIONS = {
  [ALL_MEETUPS]: {
    path: "/",
    component: AllMeetupsPage,
  },
  [NEW_MEETUP]: {
    path: "/new-meetup",
    component: NewMeetupForm,
  },
  [FAVORITES]: {
    path: "/favorites",
    component: FavoritesPage,
  },
};

export default SECTIONS;
