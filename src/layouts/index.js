import React from "react";
import { Container } from "./styles";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Container>
        <Sidebar />
        {children}
      </Container>
      <Footer />
    </>
  );
}
