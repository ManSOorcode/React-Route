import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={"/quotes"} activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/new-quotes"} activeClassName={classes.active}>
              Add New Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
