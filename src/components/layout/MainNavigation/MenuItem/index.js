import { Link } from "react-router-dom";
import { useAppState } from "../../../../context/appState";
import { getSectionPath } from "../../../../utils/sections";

import classes from "./MenuItem.module.css";

export default function MenuItem({ menuItem }) {
  const appState = useAppState();

  if (!menuItem?.sectionKey || !menuItem?.title) return null;

  return (
    <li className={classes["menu-item"]}>
      <Link to={getSectionPath(menuItem.sectionKey)} className={classes.link}>
        {menuItem.title}
        {typeof menuItem.badge === "function" && (
          <span className={classes.badge}>{menuItem.badge(appState) || 0}</span>
        )}
      </Link>
    </li>
  );
}
