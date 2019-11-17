import React, { useContext } from "react";
import { Container, Heading, Langs } from "./styles";
import ToogleItem from "../ToggleItem";
import { Context } from "../../context";
import { Link } from "react-router-dom";

export default function Header({
  hideNav,
  showSelection,
  selected,
  handleSelection
}) {
  const context = useContext(Context);

  return (
    <>
      <Container>
        <Heading>Abreu</Heading>
        <div>
          {showSelection && (
            <>
              <ToogleItem
                onClick={handleSelection(0)}
                selected={selected === 0}
              >
                {context.translation.header.all}
              </ToogleItem>
              <ToogleItem
                onClick={handleSelection(1)}
                selected={selected === 1}
              >
                Web
              </ToogleItem>
              <ToogleItem
                onClick={handleSelection(2)}
                selected={selected === 2}
              >
                Mobile
              </ToogleItem>
            </>
          )}
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
