import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";

export default function Cta({ link, children }) {
  return (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <MdOpenInNew />
        {children}
      </a>
    </Container>
  );
}

Cta.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
