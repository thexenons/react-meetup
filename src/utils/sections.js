import SECTIONS from "../config/sections";

export function getSectionPath(sectionKey) {
  if (!sectionKey) throw new Error("[getSectionPath] sectionKey is required");
  if (!SECTIONS[sectionKey])
    throw new Error("[getSectionPath] incorrect sectionKey");

  return SECTIONS[sectionKey]?.path;
}
