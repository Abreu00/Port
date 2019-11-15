import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import Layout from "../../layouts/";
import { TextContainer } from "./styles";
import { Context } from "../../context";

export default function About() {
  const context = useContext(Context);

  useEffect(() => {
    document.title = context.translation.header.about + " | Fábio de Abreu";
  });

  return (
    <Layout>
      <Header hideNav={2} />
      <TextContainer>
        <h1>About me</h1>
      </TextContainer>
    </Layout>
  );
}
