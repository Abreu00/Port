import React, { useContext } from "react";
import {
  Container,
  ShadowProvider,
  Image,
  Textarea,
  ButtonWrapper
} from "./styles";
import Button from "../Button";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import FadeAnimation from "../FadeIn";

export default function Project(props) {
  const context = useContext(Context);

  return (
    <FadeAnimation>
      <ShadowProvider>
        <Container image={props.img}>
          <div>
            <Image src={props.img}></Image>
            <Textarea>{props.title}</Textarea>
          </div>
          <ButtonWrapper>
            <Button danger={props.isExpanded}>
              <Link to={`/projects/${props.index + 1}`}>
                {context.translation.projectBtn}
              </Link>
            </Button>
          </ButtonWrapper>
        </Container>
      </ShadowProvider>
    </FadeAnimation>
  );
}
