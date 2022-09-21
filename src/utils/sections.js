import SECTIONS from "../config/sections";

export function getSectionPath(sectionKey) {
  return SECTIONS[sectionKey]?.path;
}
