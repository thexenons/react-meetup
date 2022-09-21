import MENU from "../../../config/menu";

import classes from "./MainNavigation.module.css";
import MenuItem from "./MenuItem";

export default function MainNavigation() {
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {MENU.map((menuItem, index) => (
            <MenuItem key={index} menuItem={menuItem} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
