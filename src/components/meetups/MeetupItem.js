import { useMemo } from "react";
import { useAppState } from "../../context/appState";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem({ meetup }) {
  const { favorites, addFavorite, deleteFavorite } = useAppState();
  const inFavorites = useMemo(
    () => favorites.find((favorite) => favorite === meetup?.id),
    [favorites, meetup?.id]
  );

  if (!meetup) return null;

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          {inFavorites ? (
            <button onClick={() => deleteFavorite(meetup.id)}>
              Delete from favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(meetup.id)}>
              Add to favorites
            </button>
          )}
        </div>
      </Card>
    </li>
  );
}
