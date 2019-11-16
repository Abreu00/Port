import React from "react";
import { Item } from "./styles";

export default function ToggleItem(props) {
  return (
    <Item selected={props.selected} onClick={props.onClick}>
      {props.children}
    </Item>
  );
}
