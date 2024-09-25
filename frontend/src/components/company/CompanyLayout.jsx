import React from "react";
import Container from "../common/Container";
import Header from "../common/Header";
import CompanyHeaderSection from "./CompanyHeaderSection";

const CompanyLayout = () => {
  return (
    <div className="bg-white h-screen w-screen">
      <Header />
      <Container>
        <CompanyHeaderSection />
      </Container>
    </div>
  );
};

export default CompanyLayout;
