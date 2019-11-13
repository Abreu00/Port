import React, { useState, useContext } from "react";
import { Container, Heading, Langs } from "./styles";
import ToogleItem from "../ToggleItem";
import { Context } from "../../context";

export default function Header(props) {
  const [selectedItem, setSelectedItem] = useState(0);
  const context = useContext(Context);

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
          {context.translation.header.all}
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(1)} selected={selectedItem === 1}>
          Web
        </ToogleItem>
        <ToogleItem onClick={handleItemClick(2)} selected={selectedItem === 2}>
          Mobile
        </ToogleItem>
      </ul>
      <ul>
        <li>{context.translation.header.about}</li>
        <li>{context.translation.header.xp}</li>
      </ul>
      <Langs>
        <div onClick={() => context.changeLang("en")}>EN</div>
        <div onClick={() => context.changeLang("pt")}>PT</div>
      </Langs>
    </Container>
  );
}
