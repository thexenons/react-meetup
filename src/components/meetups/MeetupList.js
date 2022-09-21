import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({
  meetups,
  isLoading,
  emptyText = "There is no meetups available",
}) {
  if (isLoading) return <p>Loading...</p>;

  if (!meetups?.length) return <p>{emptyText}</p>;

  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}
