import { useMemo } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useAppState } from "../context/appState";

export default function FavoritesPage() {
  const { favorites, meetups, isLoading } = useAppState();

  const favoriteMeetups = useMemo(
    () => meetups?.filter((meetup) => favorites.includes(meetup.id)),
    [meetups, favorites]
  );

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList
        isLoading={isLoading}
        meetups={favoriteMeetups}
        emptyText="You have no favorite meetups"
      />
    </section>
  );
}
