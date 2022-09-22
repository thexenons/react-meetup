import SECTIONS, { ALL_MEETUPS } from "../config/sections";
import { getSectionPath } from "./sections";

test("getSectionPath without sectionKey crash", () => {
  let errored = false;
  try {
    getSectionPath();
  } catch (e) {
    errored = true;
  }

  expect(errored).toBe(true);
});

test("getSectionPath with incorrect sectionKey crash", () => {
  let errored = false;
  try {
    getSectionPath("test");
  } catch (e) {
    errored = true;
  }

  expect(errored).toBe(true);
});

test("getSectionPath with sectionKey returns string", () => {
  const sectionPath = getSectionPath(ALL_MEETUPS);

  expect(typeof sectionPath).toBe("string");
});

Object.keys(SECTIONS).forEach((sectionKey) => {
  test(`getSectionPath with sectionKey ${sectionKey} returns string`, () => {
    const sectionPath = getSectionPath(sectionKey);

    expect(typeof sectionPath).toBe("string");
  });
});
