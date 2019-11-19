import React from "react";
import Main from "../pages/Main";
import About from "../pages/About";
import Experience from "../pages/Experience";
import { Route, Switch } from "react-router-dom";

export default function Routes({ location }) {
  console.log(location);
  return (
    <Switch location={location}>
      <Route exact path="/(home|)" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
    </Switch>
  );
}
