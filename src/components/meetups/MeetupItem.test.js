/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { v4 as uuidv4 } from "uuid";
import MeetupItem from "./MeetupItem";

const testMeetup = {
  id: uuidv4(),
  title: "",
  image: "",
  address: "",
  description: "",
};

test("<MeetupItem/> without props renders without crashing", () => {
  const wrapper = shallow(<MeetupItem />);
  expect(wrapper.exists()).toBe(true);
});

test("<MeetupItem/> with meetup props renders without crashing", () => {
  const wrapper = shallow(<MeetupItem meetup={testMeetup} />);
  expect(wrapper.exists()).toBe(true);
});
