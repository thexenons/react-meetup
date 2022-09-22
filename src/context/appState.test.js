/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { AppStateProvider, useAppState } from "./appState";

test("<AppStateProvider/> renders without crashing", () => {
  const wrapper = shallow(<AppStateProvider />);
  expect(wrapper.exists()).toBe(true);
});

const TestComponent = () => {
  const appState = useAppState();

  if (!appState) throw new Error("appState error");

  return <div>TestComponent</div>;
};

test("useAppState() working properly", () => {
  const wrapper = shallow(
    <AppStateProvider>
      <TestComponent />
    </AppStateProvider>
  );

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.text().includes("TestComponent")).toBe(true);
});
