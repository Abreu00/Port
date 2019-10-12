import React from "react";
import { Container, Image, Textarea } from "./styles";
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
        <Button onClick={props.onClick}>Expand</Button>
      </div>
    </Container>
  );
}
