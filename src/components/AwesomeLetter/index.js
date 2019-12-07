import React, { useState } from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default function AwesomeLetter({ children, initial, delay }) {
  const [animation, setAnimation] = useState({
    running: initial,
    delay: delay,
    opacity: initial ? 0 : 1
  });

  function handleMouseOver() {
    if (!animation.running) {
      setAnimation({ ...animation, running: true });
    }
  }

  function handleAnimationEnd() {
    setAnimation({ running: false, delay: 0, opacity: 1 });
  }

  return (
    <Container
      onMouseOver={handleMouseOver}
      onAnimationEnd={handleAnimationEnd}
      running={animation.running}
      delay={animation.delay}
      style={{ opacity: animation.opacity }}
    >
      {children}
    </Container>
  );
}

AwesomeLetter.propTypes = {
  children: PropTypes.string.isRequired,
  initial: PropTypes.bool,
  delay: PropTypes.number
};

AwesomeLetter.defaultProps = {
  delay: 0,
  initial: false
};
