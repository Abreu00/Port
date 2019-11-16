import React, { useState, useContext } from "react";
import { Container, Heading, Langs } from "./styles";
import ToogleItem from "../ToggleItem";
import { Context } from "../../context";
import { Link } from "react-router-dom";

export default function Header({ hideNav, showSelection }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const context = useContext(Context);

  function handleItemClick(itemId) {
    return () => {
      setSelectedItem(itemId);
    };
  }

  return (
    <>
      <Container showSelection={showSelection}>
        <Heading>Abreu</Heading>
        <div>
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
        </div>
        <nav>
          {hideNav !== 1 && <Link to="/home">Home</Link>}
          {hideNav !== 2 && (
            <Link to="/about">{context.translation.header.about}</Link>
          )}
          {hideNav !== 3 && (
            <Link to="/experience">{context.translation.header.xp}</Link>
          )}
        </nav>
      </Container>
      <Langs>
        <span onClick={() => context.changeLang("en")}>EN</span>
        <span onClick={() => context.changeLang("pt")}>PT</span>
      </Langs>
    </>
  );
}
