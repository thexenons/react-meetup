/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MainNavigation from "./";

test("<MainNavigation/> renders without crashing", () => {
  const wrapper = shallow(<MainNavigation />);
  expect(wrapper.exists()).toBe(true);
});
