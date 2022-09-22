/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import Layout from "./Layout";

test("<Layout/> renders without crashing", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.exists()).toBe(true);
});
