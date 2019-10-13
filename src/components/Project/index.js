import React from "react";
import { Container, Image, Textarea, ButtonWrapper, Expanded } from "./styles";
import Button from "../Button";
import { Context } from "../../context";

export default function Project(props) {
  return (
    <Container>
      <div>
        <Image></Image>
        <Textarea>
          <h2>{props.title}</h2>
          {props.children}
        </Textarea>
        <ButtonWrapper>
          <Context.Consumer>
            {context => (
              <Button danger={props.isExpanded} onClick={props.onClick}>
                {props.isExpanded
                  ? context.translation.projectBtn[1]
                  : context.translation.projectBtn[0]}
              </Button>
            )}
          </Context.Consumer>
        </ButtonWrapper>
        <Expanded visible={props.isExpanded}>
          <p>sa,da</p>
        </Expanded>
      </div>
    </Container>
  );
}
