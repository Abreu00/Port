import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import Project from "../../components/Project";
/*import { ProjectsContainer } from "./styles";*/
import { Context } from "../../context";
import Layout from "../../layouts/";
import projects from "../../assets/projects";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  const context = useContext(Context);
  // 0 for all projects, 1 for web and two for mobile
  const [selector, setSelector] = useState(0);

  useEffect(() => {
    document.title = context.translation.header.home + " | Fábio de Abreu";
  }, [context.translation]);

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
            index={i}
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
      <ProjectsContainer>{mapProjects()}</ProjectsContainer>
    </Layout>
  );
}
