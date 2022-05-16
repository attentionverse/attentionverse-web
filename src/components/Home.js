import React from "react";
import styled from "styled-components";
import ReachUsSection from "./ReachUs"
import DevSection from "./DevSection"
import MVPSection from "./MVP";
import CaseStudySection from "./CaseStudy";
import StartupSection from "./StartupSection";
import Header from "./Header";
import * as StartupAction from '../redux/actions/StartupAction'
import {connect} from 'react-redux'

class Home extends React.Component {
  render(){
  return (
    <div style={{backgroundColor:"black"}}>
    <Header />
    <Container>
      <DevSection
       title="Your Dev Team"
       // description="Order Online for Touchless Delivery"
      //  backgroundImage="your-dev-background.jpeg"
       leftButtonText="Custom Order"
       rightButtonText="Existing Inventory"
      //  showDownArrow
      />
      <MVPSection
       title="MVP in 2 Weeks"
       // description="Order Online for Touchless Delivery"
      //  backgroundImage="model-3.jpg"
       showDownArrow
      />
      <CaseStudySection
      title="Case Studies"
      description="Order Online for Touchless Delivery"
      // backgroundImage="model-3.jpg"
      // leftButtonText="Custom Order"
      // rightButtonText="Existing Inventory"
       />
      
      <StartupSection
       title="Startup Resources"
       description="Order Online for Touchless Delivery"
       // backgroundImage="model-3.jpg"
       // leftButtonText="Custom Order"
       // rightButtonText="Existing Inventory"
       saveId ={this.props.saveId()}
       id={this.props.id}

      />
      <ReachUsSection
        title="REACH US"
        description=""
        // backgroundImage="accessories.jpg"
      />
      
    </Container>
    </div>
  );
}
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y ;
  overflow-y: scroll;
  overflow-x: hidden;
`;



const mapStateToProps = (state) => ({
  id:state.startup.id

})

const mapDispatchToProps = (dispatch) => ({
  saveId: (q) => dispatch(StartupAction.saveId(q))

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)