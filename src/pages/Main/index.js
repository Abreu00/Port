import React, { useState, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { Container, ProjectsContainer } from "./styles";
import Footer from "../../components/Footer";
import { Context } from "../../context";

export default function Main() {
  const [expandedProject, setExpandedProject] = useState(0);
  const context = useContext(Context);

  function handleExpansionGen(key) {
    return () =>
      expandedProject === key ? setExpandedProject(0) : setExpandedProject(key);
  }

  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div>
          <Header hideNav={1}></Header>
          <ProjectsContainer expanded={expandedProject}>
            {context.translation.projects.map((project, i) => (
              <Project
                onClick={handleExpansionGen(i + 1)}
                isExpanded={expandedProject === i + 1}
                key={i}
                title={project.title}
              >
                {project.desc}
              </Project>
            ))}
          </ProjectsContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
}
