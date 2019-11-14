import React, { useContext } from "react";
import { Container, Image, Textarea, ButtonWrapper, Expanded } from "./styles";
import Button from "../Button";
import { Context } from "../../context";

export default function Project(props) {
  const context = useContext(Context);

  return (
    <Container>
      <div>
        <Image></Image>
        <Textarea>
          <h2>{props.title}</h2>
          {props.children}
        </Textarea>
        <ButtonWrapper>
          <Button danger={props.isExpanded} onClick={props.onClick}>
            {props.isExpanded
              ? context.translation.projectBtn[1]
              : context.translation.projectBtn[0]}
          </Button>
        </ButtonWrapper>
        <Expanded visible={props.isExpanded}>
          <p>sa,da</p>
        </Expanded>
      </div>
    </Container>
  );
}
