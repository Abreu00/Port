import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/";
import About from "./pages/About";
import Experience from "./pages/Experience";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </BrowserRouter>
  );
}
