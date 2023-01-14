import React from "react";
import Navigation from "./Navigation";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
