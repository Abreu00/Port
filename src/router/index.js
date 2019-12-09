import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes";
import ScrollTop from "./ScrollTop";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </Switch>
    </BrowserRouter>
  );
}
