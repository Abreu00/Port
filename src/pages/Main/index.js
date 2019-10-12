import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { Container, ProjectsContainer } from "./styles";
import Footer from "../../components/Footer";

export default function Main() {
  const [expandedProject, setExpandedProject] = useState(1);

  function handleExpansionGen(key) {
    return () => setExpandedProject(key);
  }

  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div>
          <Header></Header>
          <ProjectsContainer expanded={expandedProject}>
            <Project onClick={handleExpansionGen(1)}></Project>
            <Project onClick={handleExpansionGen(2)}></Project>
            <Project onClick={handleExpansionGen(3)}></Project>
            <Project onClick={handleExpansionGen(4)}></Project>
          </ProjectsContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
}
