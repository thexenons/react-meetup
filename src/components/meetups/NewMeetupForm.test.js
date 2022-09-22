/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import NewMeetupForm from "./NewMeetupForm";

test("<NewMeetupForm/> renders without crashing", () => {
  const wrapper = shallow(<NewMeetupForm />);
  expect(wrapper.exists()).toBe(true);
});

test("<NewMeetupForm/> submit working", async () => {
  const wrapper = shallow(<NewMeetupForm />);
  const titleInput = wrapper.find("input[id='title']");
  const imageInput = wrapper.find("input[id='image']");
  const addressInput = wrapper.find("input[id='address']");
  const descriptionInput = wrapper.find("input[id='description']");
  const form = wrapper.find("form");

  titleInput.value = "Test";
  imageInput.value =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
  addressInput.value = "Test";
  descriptionInput.value = "Test";

  form.simulate("submit");

  expect(wrapper.exists()).toBe(true);
});
