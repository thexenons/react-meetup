/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import Card from "./Card";

test("<Card/> renders without crashing", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.exists()).toBe(true);
});
