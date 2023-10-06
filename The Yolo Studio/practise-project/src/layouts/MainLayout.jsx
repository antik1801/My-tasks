import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import FooterPage from "../pages/shared/FooterPage";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-304px)]">
        <Container>
          <Outlet />
        </Container>
      </div>
      <FooterPage />
    </div>
  );
};

export default MainLayout;
