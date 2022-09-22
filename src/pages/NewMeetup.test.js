/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import NewMeetup from "./NewMeetup";

test("<NewMeetup/> renders without crashing", () => {
  const wrapper = shallow(<NewMeetup />);
  expect(wrapper.exists()).toBe(true);
});
