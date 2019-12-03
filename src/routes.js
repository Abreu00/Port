import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";

function ScrollTop({ location, children }) {
  console.log(location);
  useEffect(() => {
    console.log(location);
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <ScrollTop>
          <Route exact path="/(home|)" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects/:id" component={Project} />
        </ScrollTop>
      </Switch>
    </BrowserRouter>
  );
}
