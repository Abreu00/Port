import React, { useState, useContext } from "react";
import { Container, Heading, Langs, Link } from "./styles";
import ToogleItem from "../ToggleItem";
import { Context } from "../../context";
import { Redirect } from "react-router-dom";

export default function Header(props) {
  const [selectedItem, setSelectedItem] = useState(0);
  const context = useContext(Context);
  const [redirect, setRedirect] = useState({ path: "", go: false });

  function handleItemClick(itemId) {
    return () => {
      setSelectedItem(itemId);
    };
  }
  console.log(props);

  return (
    <Container>
      {redirect.go && <Redirect push to={redirect.path} />}
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
        <li
          hidden={props.hideNav === 1}
          onClick={() => setRedirect({ path: "/home", go: true })}
        >
          <Link>Home</Link>
        </li>
        <li
          hidden={props.hideNav === 2}
          onClick={() => setRedirect({ path: "/about", go: true })}
        >
          <Link>{context.translation.header.about}</Link>
        </li>
        <li
          hidden={props.hideNav === 3}
          onClick={() => setRedirect({ path: "/experience", go: true })}
        >
          <Link>{context.translation.header.xp}</Link>
        </li>
      </ul>
      <Langs>
        <div onClick={() => context.changeLang("en")}>EN</div>
        <div onClick={() => context.changeLang("pt")}>PT</div>
      </Langs>
    </Container>
  );
}
