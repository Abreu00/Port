import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Container, CardContainer } from "./styles";
import Footer from "../../components/Footer";

export default function Main() {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div>
          <Header></Header>
          <CardContainer>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="The porfolio" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
            <Card title="Directa viewer" category="front-end"></Card>
          </CardContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
}
