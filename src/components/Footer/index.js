import React from "react";
import { Container } from "./styles";
import { Context } from "../../context";

export default function Footer() {
  return (
    <Container>
      &copy;{" "}
      <Context.Consumer>
        {context => context.translation.footer}
      </Context.Consumer>
    </Container>
  );
}
