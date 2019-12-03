import React, { useState } from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

export default function AwesomeLetter({ children, initial }) {
  const [animated, setAnimated] = useState(false);

  function handleMouseOver() {
    if (!animated) {
      setAnimated(true);
    }
  }

  function handleAnimationEnd() {
    setAnimated(false);
  }

  return (
    <Container
      onMouseOver={handleMouseOver}
      onAnimationEnd={handleAnimationEnd}
      running={animated}
    >
      {children}
    </Container>
  );
}

AwesomeLetter.propTypes = {
  children: PropTypes.string.isRequired,
  initial: PropTypes.bool
};
