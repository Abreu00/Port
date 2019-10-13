import React from "react";
import { Container, Heading } from "./styles";
import ToogleItem from "../ToggleItem";
import { useState } from "react";
import { Context } from "../../context";

export default function Header(props) {
  const [selectedItem, setSelectedItem] = useState(0);

  function handleItemClick(itemId) {
    return () => {
      setSelectedItem(itemId);
    };
  }

  return (
    <Container>
      <Heading>Abreu</Heading>
      <ul>
        <ToogleItem onClick={handleItemClick(0)} selected={selectedItem === 0}>
          All
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(1)} selected={selectedItem === 1}>
          Web
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(2)} selected={selectedItem === 2}>
          Mobile
        </ToogleItem>
      </ul>
      <ul>
        <Context.Consumer>
          {context => (
            <>
              <li>{context.translation.options[0]}</li>
              <li>Experience</li>
            </>
          )}
        </Context.Consumer>
      </ul>
      <div>
        <Context.Consumer>
          {context => (
            <>
              <div onClick={() => context.changeLang("en")}>En</div>
              <div onClick={() => context.changeLang("pt")}>PT</div>
            </>
          )}
        </Context.Consumer>
      </div>
    </Container>
  );
}
