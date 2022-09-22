/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { v4 as uuidv4 } from "uuid";
import MeetupList from "./MeetupList";

const testMeetups = [
  {
    id: uuidv4(),
    title: "",
    image: "",
    address: "",
    description: "",
  },
  {
    id: uuidv4(),
    title: "",
    image: "",
    address: "",
    description: "",
  },
  {
    id: uuidv4(),
    title: "",
    image: "",
    address: "",
    description: "",
  },
];

test("<MeetupList/> without props renders without crashing", () => {
  const wrapper = shallow(<MeetupList />);
  expect(wrapper.exists()).toBe(true);
});

test("<MeetupList/> with meetups prop renders without crashing", () => {
  const wrapper = shallow(<MeetupList meetups={testMeetups} />);
  expect(wrapper.exists()).toBe(true);
});

test("<MeetupList/> with isLoading prop renders without crashing", () => {
  const wrapper = shallow(<MeetupList isLoading />);
  expect(wrapper.text().includes("Loading...")).toBe(true);
});

test("<MeetupList/> with emptyText prop renders without crashing", () => {
  const wrapper = shallow(<MeetupList emptyText="Test empty text" />);
  expect(wrapper.text().includes("Test empty text")).toBe(true);
});
