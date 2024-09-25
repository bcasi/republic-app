import React from "react";
import Container from "../common/Container";
import Header from "../common/Header";
import CompanyHeaderSection from "./header-section/CompanyHeaderSection";
import TabSidebar from "./tab-section/TabSidebar";
import TabsSection from "./tab-section/TabsSection";

const CompanyLayout = () => {
  return (
    <div className="bg-white h-screen w-screen ">
      <Header />
      <div className="mb-10">
        <Container>
          <CompanyHeaderSection />
        </Container>
      </div>
      <div className="hidden lg:block">
        <TabsSection />
      </div>
    </div>
  );
};

export default CompanyLayout;
