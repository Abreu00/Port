import React, { useContext } from "react";
import { Container, Image, Textarea, ButtonWrapper } from "./styles";
import Button from "../Button";
import { Context } from "../../context";
import { Link } from "react-router-dom";

export default function Project(props) {
  const context = useContext(Context);

  return (
    <Container expanded={props.isExpanded}>
      <div>
        <Image src={props.img}></Image>
        <Textarea>
          <h2>{props.title}</h2>
          {props.children}
        </Textarea>
      </div>
      <ButtonWrapper>
        <Button danger={props.isExpanded}>
          <Link to={`/projects/${props.index + 1}`}>
            {props.isExpanded
              ? context.translation.projectBtn[1]
              : context.translation.projectBtn[0]}
          </Link>
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
