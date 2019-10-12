import React from "react";
import { Container, Image, Textarea } from "./styles";
import Button from "../Button";

export default function Project() {
  return (
    <Container>
      <div>
        <Image></Image>
        <Textarea>
          <h2>Directa Viewer</h2>
          Projeto de Dashboard para visualização de estados de maquina realizado
          com React
        </Textarea>
        <Button>Expand</Button>
      </div>
    </Container>
  );
}
