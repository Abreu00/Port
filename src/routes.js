import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Main from "./pages/Main/";
import About from "./pages/About";
import Experience from "./pages/Experience";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Wrapper = styled.div`
  transform-origin: 0% 100%;
  .fade-enter {
    opacity: 0.01;
    visibility: hidden;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 900ms linear;
    transform: scaleY(1);
    visibility: initial;
  }

  .fade-exit {
    opacity: 1;
    transform: scaleY(1);
  }

  .fade-exit.fade-exit-active {
    transition-delay: 900ms;
    opacity: 0.01;
    transition: all 900ms linear;
  }
`;

function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 900, leave: 900 }}
          classNames="fade"
          appear={true}
          unmountOnExit
        >
          <Switch location={location}>
            <Route exact path="/(home|)" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}
const CON = withRouter(Container);

export default function() {
  return (
    <BrowserRouter>
      <CON></CON>
    </BrowserRouter>
  );
}
