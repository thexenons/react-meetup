import { useCallback, useRef } from "react";
import MENU from "../../../config/menu";
import useScroll from "../../../util-hooks/useScroll";

import classes from "./MainNavigation.module.css";
import MenuItem from "./MenuItem";

export default function MainNavigation() {
  const headerRef = useRef();
  const scrolledUp = useRef(false);
  const lastScrollY = useRef(0);

  const prepareScroll = useCallback(() => {
    scrolledUp.current = lastScrollY.current > window.scrollY;
    lastScrollY.current = window.scrollY;
  }, []);

  const handleScroll = useCallback(() => {
    if (scrolledUp.current) {
      headerRef.current.classList.remove(classes.scrolled);
    } else {
      headerRef.current.classList.add(classes.scrolled);
    }
  }, []);

  useScroll(handleScroll, prepareScroll);

  return (
    <header
      ref={headerRef}
      className={classes.header}
      data-test="navigation-header"
    >
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
