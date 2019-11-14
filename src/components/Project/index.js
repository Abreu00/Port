import React, { useContext, useRef } from "react";
import { Container, Image, Textarea, ButtonWrapper, Expanded } from "./styles";
import Button from "../Button";
import { Context } from "../../context";

export default function Project(props) {
  const context = useContext(Context);
  const ref = useRef(null);

  function handleTranstionEnd(event) {
    if (event.propertyName === "height" && props.isExpanded) {
      const project = ref.current;
      const projectSize = project.clientHeight;
      const projectOffset = project.offsetTop;

      if (projectSize < window.innerHeight) {
        const spaceOnTop = (window.innerHeight - projectSize) / 2;
        window.scrollTo(0, projectOffset - spaceOnTop);
      } else {
        window.scrollTo(0, projectOffset - 10);
      }
    }
  }

  return (
    <Container ref={ref} expanded={props.isExpanded}>
      <div>
        <Image></Image>
        <Textarea>
          <h2>{props.title}</h2>
          {props.children}
        </Textarea>
        <Expanded
          onTransitionEnd={handleTranstionEnd}
          visible={props.isExpanded}
        >
          <p>sa,da</p>
        </Expanded>
      </div>
      <ButtonWrapper>
        <Button danger={props.isExpanded} onClick={props.onClick}>
          {props.isExpanded
            ? context.translation.projectBtn[1]
            : context.translation.projectBtn[0]}
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
