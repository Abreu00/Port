import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes";
import ScrollTop from "./ScrollTop";
import Layout from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <ScrollTop>
            <Routes />
          </ScrollTop>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
