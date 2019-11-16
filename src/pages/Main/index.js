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
  // 0 for all projects, 1 for web and two for mobile
  const [selector, setSelector] = useState(0);

  useEffect(() => {
    document.title = context.translation.header.home + " | Fábio de Abreu";
  });

  function handleExpansionGen(key) {
    return () =>
      expandedProject === key ? setExpandedProject(0) : setExpandedProject(key);
  }

  function selectCondition(projectIndex) {
    return selector === 0 || selector === projects[projectIndex].type;
  }

  function handleSelection(itemId) {
    /* Handles click for toogle item on header*/
    return () => setSelector(itemId);
  }

  function mapProjects() {
    return context.translation.projects.map(
      (project, i) =>
        selectCondition(i) && (
          <Project
            onClick={handleExpansionGen(i + 1)}
            isExpanded={expandedProject === i + 1}
            key={i}
            title={project.title}
            img={projects[i].img}
          >
            {project.desc}
          </Project>
        )
    );
  }

  return (
    <Layout>
      <Header
        showSelection
        selected={selector}
        handleSelection={handleSelection}
        hideNav={1}
      ></Header>
      <ProjectsContainer expanded={expandedProject}>
        {mapProjects()}
      </ProjectsContainer>
    </Layout>
  );
}
