import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/(home|)" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}
