import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { ProjectsContainer } from "./styles";
import { Context } from "../../context";
import Layout from "../../layouts/";
import projects from "../../assets/projects";

export default function Main() {
  const [expandedProject, setExpandedProject] = useState(0);
  const context = useContext(Context);

  useEffect(() => {
    document.title = context.translation.header.home + " | Fábio de Abreu";
  });

  function handleExpansionGen(key) {
    return () =>
      expandedProject === key ? setExpandedProject(0) : setExpandedProject(key);
  }

  return (
    <Layout>
      <Header showSelection hideNav={1}></Header>
      <ProjectsContainer expanded={expandedProject}>
        {context.translation.projects.map((project, i) => (
          <Project
            onClick={handleExpansionGen(i + 1)}
            isExpanded={expandedProject === i + 1}
            key={i}
            title={project.title}
            img={projects[i].img}
          >
            {project.desc}
          </Project>
        ))}
      </ProjectsContainer>
    </Layout>
  );
}
