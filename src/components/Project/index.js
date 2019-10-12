import React from "react";
import { Container, Image, Textarea, ButtonWrapper } from "./styles";
import Button from "../Button";

export default function Project(props) {
  return (
    <Container>
      <div>
        <Image></Image>
        <Textarea>
          <h2>Directa Viewer</h2>
          Projeto de Dashboard para visualização de estados de maquina realizado
          com React
        </Textarea>
        <ButtonWrapper>
          <Button danger={props.isExpanded} onClick={props.onClick}>
            {props.isExpanded ? "Close" : "Expand"}
          </Button>
        </ButtonWrapper>
      </div>
    </Container>
  );
}
