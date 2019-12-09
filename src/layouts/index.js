import React from "react";
import { Container } from "./styles";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PageMountAnimation from "../components/PageMountAnimation";
import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Container>
        <Sidebar />
        <div>
          <Header></Header>
          <PageMountAnimation>{children}</PageMountAnimation>
        </div>
      </Container>
      <Footer />
    </>
  );
}
