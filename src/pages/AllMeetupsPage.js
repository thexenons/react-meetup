import MeetupList from "../components/meetups/MeetupList";
import { useAppState } from "../context/appState";

export default function AllMeetupsPage() {
  const { meetups, isLoading } = useAppState();

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList isLoading={isLoading} meetups={meetups} />
    </section>
  );
}
