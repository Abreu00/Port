import React from "react";
import { Container } from "./styles";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PageMountAnimation from "../components/PageMountAnimation";

export default function MainLayout({ children }) {
  return (
    <>
      <Container>
        <Sidebar />
        <PageMountAnimation>{children}</PageMountAnimation>
      </Container>
      <Footer />
    </>
  );
}
