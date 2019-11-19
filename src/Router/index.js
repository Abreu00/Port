import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import RouterAnimations from "./RouterAnimations";

export default function Router() {
  return (
    <BrowserRouter>
      <RouterAnimations>
        <Routes />
      </RouterAnimations>
    </BrowserRouter>
  );
}
