import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({
  meetups,
  isLoading = false,
  emptyText = "There is no meetups available",
}) {
  if (isLoading) return <p>Loading...</p>;

  if (!meetups?.length) return <p>{emptyText}</p>;

  return (
    <ul className={classes.list}>
      {meetups.map((meetup, index) => (
        <MeetupItem key={meetup?.id || index} meetup={meetup} />
      ))}
    </ul>
  );
}
