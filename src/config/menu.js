import { ALL_MEETUPS, FAVORITES, NEW_MEETUP } from "./sections";

const MENU = [
  {
    sectionKey: ALL_MEETUPS,
    title: "All Meetups",
  },
  {
    sectionKey: NEW_MEETUP,
    title: "Add New Meetup",
  },
  {
    sectionKey: FAVORITES,
    title: "My Favorites",
    badge: (appState) => appState?.favorites?.length || 0,
  },
];

export default MENU;
