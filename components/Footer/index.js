import React, { useContext } from "react";
import { Container } from "./styles";
import { Context } from "../../context";

export default function Footer() {
  const context = useContext(Context);
  return <Container>&copy; {context.translation.footer}</Container>;
}
