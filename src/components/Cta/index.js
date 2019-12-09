import React from "react";
import { Container, Disabled } from "./styles";
import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";

export default function Cta({ link, children, disabled }) {
  let content = (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <MdOpenInNew></MdOpenInNew>
        {children}
      </a>
    </Container>
  );
  if (disabled) content = <Disabled>{children}</Disabled>;

  return content;
}

Cta.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
