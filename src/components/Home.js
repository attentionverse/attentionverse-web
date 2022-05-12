import React from "react";
import styled from "styled-components";
import ReachUsSection from "./ReachUs"
import DevSection from "./DevSection"
import MVPSection from "./MVP";
import CaseStudySection from "./CaseStudy";
import StartupSection from "./StartupSection";

function Home() {
  return (
    <Container>
      <DevSection
       title=" Your Dev Team"
       // description="Order Online for Touchless Delivery"
       backgroundImage="your-dev-background.jpeg"
       leftButtonText="Custom Order"
       rightButtonText="Existing Inventory"
       showDownArrow
      />
      <MVPSection
       title=" MVP in 2 Weeks"
       // description="Order Online for Touchless Delivery"
       backgroundImage="model-3.jpg"
       showDownArrow
      />
      <CaseStudySection
      title="Case Studies"
      description="Order Online for Touchless Delivery"
      backgroundImage="model-3.jpg"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
       />
      
      <StartupSection />
      <ReachUsSection
        title="REACH US"
        description=""
        // backgroundImage="accessories.jpg"
        
      />
      
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y ;
  overflow-y: scroll;
  overflow-x: hidden;
`;
