import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/";
import TextPage from "./pages/TextPage";

import Project from "./pages/Project";

function ScrollTop({ location, children }) {
  useEffect(() => {
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
          <Route path="/projects/:id" component={Project} />
          <Route
            path="/about"
            render={props => <TextPage {...props} name="about"></TextPage>}
          />
          <Route
            path="/experience"
            render={props => <TextPage {...props} name="experience"></TextPage>}
          />
        </ScrollTop>
      </Switch>
    </BrowserRouter>
  );
}
