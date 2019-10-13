import React from "react";
import { Container, Heading, Langs } from "./styles";
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
      <Context.Consumer>
        {context => (
          <>
            <ul>
              <ToogleItem
                onClick={handleItemClick(0)}
                selected={selectedItem === 0}
              >
                {context.translation.header.all}
              </ToogleItem>
              <ToogleItem
                onClick={handleItemClick(1)}
                selected={selectedItem === 1}
              >
                Web
              </ToogleItem>
              <ToogleItem
                onClick={handleItemClick(2)}
                selected={selectedItem === 2}
              >
                Mobile
              </ToogleItem>
            </ul>
            <ul>
              <li>{context.translation.header.about}</li>
              <li>{context.translation.header.xp}</li>
            </ul>
          </>
        )}
      </Context.Consumer>
      <Langs>
        <Context.Consumer>
          {context => (
            <>
              <div onClick={() => context.changeLang("en")}>EN</div>
              <div onClick={() => context.changeLang("pt")}>PT</div>
            </>
          )}
        </Context.Consumer>
      </Langs>
    </Container>
  );
}
