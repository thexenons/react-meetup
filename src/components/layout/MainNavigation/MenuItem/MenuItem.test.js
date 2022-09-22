/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MENU from "../../../../config/menu";
import MenuItem from "./";

test("<MenuItem/> without props renders without crashing", () => {
  const wrapper = shallow(<MenuItem />);
  expect(wrapper.exists()).toBe(true);
});

MENU.forEach((menuItem, index) => {
  test(`<MenuItem/> with menuItem ${index} renders without crashing`, () => {
    const wrapper = shallow(<MenuItem menuItem={menuItem} />);
    expect(wrapper.exists()).toBe(true);
  });
});
