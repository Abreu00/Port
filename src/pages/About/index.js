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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          rem eligendi omnis amet in minus voluptatem et nemo quo obcaecati
          dignissimos, libero eaque culpa quis sint commodi veniam magnam quae.
        </p>
      </TextContainer>
    </Layout>
  );
}
