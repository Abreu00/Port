import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { Container } from "./styles";
import Footer from "../../components/Footer";

export default function Main() {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div>
          <Header></Header>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </div>
      </Container>
      <Footer />
    </>
  );
}
