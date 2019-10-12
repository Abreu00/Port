import React from "react";
import { Container, CardInfo, Text } from "./styles";

export default function Card(props) {
  return (
    <Container url="./img/directa.png">
      <CardInfo>
        <Text>
          <span>{props.title}</span>
          <span>{props.category}</span>
        </Text>
      </CardInfo>
    </Container>
  );
}
