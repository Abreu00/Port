import React from "react";
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Animations } from "./styles";

function RouterAnimation({ location, children }) {
  return (
    <Animations>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 900, leave: 900 }}
          classNames="fade"
          appear={true}
          unmountOnExit
        >
          {React.cloneElement(children, [location])}
        </CSSTransition>
      </TransitionGroup>
    </Animations>
  );
}

export default withRouter(RouterAnimation);
