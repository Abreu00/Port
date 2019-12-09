import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Project from "../../components/Project";
import { ProjectsContainer } from "./styles";
import { Context } from "../../context";
import Layout from "../../layouts/";
import projects from "../../assets/projects";
import { connect } from "react-redux";

function Main({ selectedProject, hideNavItem }) {
  const context = useContext(Context);

  useEffect(() => {
    document.title = context.translation.header.home + " | Fábio de Abreu";
  }, [context.translation]);

  function selectCondition(projectIndex) {
    return (
      selectedProject === 0 || selectedProject === projects[projectIndex].type
    );
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
      <Header showSelection hideNav={1}></Header>
      <ProjectsContainer>{mapProjects()}</ProjectsContainer>
    </Layout>
  );
}

const mapStateToProps = state => ({
  selectedProject: state.projectSelector.selected
});

export default connect(mapStateToProps)(Main);
