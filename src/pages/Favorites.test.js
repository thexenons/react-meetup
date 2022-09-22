/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import Favorites from "./Favorites";

test("<Favorites/> renders without crashing", () => {
  const wrapper = shallow(<Favorites />);
  expect(wrapper.exists()).toBe(true);
});
