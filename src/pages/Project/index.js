import React, { useContext } from "react";
import Layout from "../../layouts";
import Header from "../../components/Header";
import { Context } from "../../context";

import { Title } from "./styles";

export default function Project({ match }) {
  const context = useContext(Context);
  const projectNumber = parseInt(match.params.id) - 1;

  return (
    <Layout>
      <Header />
      <Title>{context.translation.projects[projectNumber].title}</Title>
    </Layout>
  );
}
