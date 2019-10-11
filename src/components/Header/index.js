import React from "react";
import { Container, Heading } from "./styles";
import ToogleItem from "../ToggleItem";
import { useState } from "react";

export default function Header(props) {
  const [selectedItem, setSelectedItem] = useState(0);

  function handleItemClick(itemId) {
    return () => {
      setSelectedItem(itemId);
    };
  }

  return (
    <Container>
      <Heading>teee</Heading>
      <ul>
        <ToogleItem onClick={handleItemClick(0)} selected={selectedItem === 0}>
          das
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(1)} selected={selectedItem === 1}>
          ada
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(2)} selected={selectedItem === 2}>
          badas
        </ToogleItem>
      </ul>
      <ul>
        <li>About me</li>
      </ul>
    </Container>
  );
}
