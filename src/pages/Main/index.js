import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { ProjectsContainer } from "./styles";
import { Context } from "../../context";
import Layout from "../../layouts/";

export default function Main() {
  const [expandedProject, setExpandedProject] = useState(0);
  const context = useContext(Context);

  function handleExpansionGen(key) {
    return () =>
      expandedProject === key ? setExpandedProject(0) : setExpandedProject(key);
  }

  return (
    <Layout>
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
    </Layout>
  );
}
