import React from "react";
import { Btn } from "./styles";

export default function Button(props) {
  return (
    <Btn danger={props.danger} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
}
