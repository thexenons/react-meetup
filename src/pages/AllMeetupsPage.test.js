/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import AllMeetupsPage from "./AllMeetupsPage";

test("<AllMeetupsPage/> renders without crashing", () => {
  const wrapper = shallow(<AllMeetupsPage />);
  expect(wrapper.exists()).toBe(true);
});
