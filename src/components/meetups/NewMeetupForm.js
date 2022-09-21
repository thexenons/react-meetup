import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppState } from "../../context/appState";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const initialFormState = {
  title: "",
  image: "",
  address: "",
  description: "",
};

export default function NewMeetupForm() {
  const { addMeetup } = useAppState();

  const [inputValues, setInputValues] = useState(initialFormState);

  const updateInputValue = useCallback((e) => {
    const source = e.target.getAttribute("id");
    const value = e.target.value;
    console.log({ source, value });

    setInputValues((inputValues) => ({ ...inputValues, [source]: value }));
  }, []);

  function submitHandler(event) {
    event.preventDefault();

    addMeetup({ ...inputValues, id: uuidv4() });
    setInputValues(initialFormState);
  }

  console.log({ inputValues, title: inputValues.title });
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            onChange={updateInputValue}
            value={inputValues.title}
            type="text"
            required
            id="title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            onChange={updateInputValue}
            value={inputValues.image}
            type="url"
            required
            id="image"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            onChange={updateInputValue}
            value={inputValues.address}
            type="text"
            required
            id="address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={updateInputValue}
            value={inputValues.description}
            id="description"
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
