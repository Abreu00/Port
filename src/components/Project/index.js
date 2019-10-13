import React from "react";
import { Container, Image, Textarea, ButtonWrapper, Expanded } from "./styles";
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
        <Expanded visible={props.isExpanded}>
          <h2>mdoasmo</h2>
          <p>sa,da</p>
        </Expanded>
      </div>
    </Container>
  );
}
