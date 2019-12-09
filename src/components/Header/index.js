import React, { useContext } from "react";
import { Container, Heading, Langs } from "./styles";
import ToogleItem from "../ToggleItem";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import AwesomeLetter from "../AwesomeLetter";
import { connect } from "react-redux";

import * as HeaderActions from "../../store/actions/header";

const header = "Abreu";

function Header({ hiddenNav, selectProjects, projectSelector }) {
  const context = useContext(Context);
  const toggleList = [context.translation.header.all, "Web", "Mobile"];
  const links = ["home", "about", "experience"];
  const animateHeading = projectSelector.isVisible; //Indicates if we are on home link

  return (
    <>
      <Container>
        <Heading>
          {header.split("").map((letter, index) => (
            <AwesomeLetter
              initial={animateHeading}
              delay={(index + 1) * 0.4}
              key={index}
            >
              {letter}
            </AwesomeLetter>
          ))}
        </Heading>
        <div>
          {projectSelector.isVisible &&
            toggleList.map((item, index) => (
              <ToogleItem
                key={index}
                onClick={() => selectProjects(index)}
                selected={projectSelector.selected === index}
              >
                {item}
              </ToogleItem>
            ))}
        </div>
        <nav>
          {links.map(
            (link, index) =>
              hiddenNav !== link && (
                <Link key={index} to={`/${link}`}>
                  {context.translation.header[link]}
                </Link>
              )
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

const mapStateToProps = state => ({
  projectSelector: state.projectSelector,
  hiddenNav: state.hiddenNav
});

const mapDispatchToProps = dispatch => ({
  selectProjects: selected => dispatch(HeaderActions.selectProjects(selected))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
