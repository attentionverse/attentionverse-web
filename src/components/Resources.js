import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import "../index.css";
import data from "../config/data.json"

function Resources({
  id
}
  
 ) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/resources`; 
    navigate(path);
  }
  return (
    <Wrap
    style={{backgroundColor:'black'}}
      
    >
      
      <Block>
      <div class="container">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      </Block>
      <Block>
      <div class="container">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      </Block>
      <Block>
      <div class="container">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      <MoreSection>
      <a href="https://www.w3schools.com" style={{color:"white"}}>More Info</a>
      </MoreSection>
      </Block>

    </Wrap>
  );
}


export default Resources;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin-left:auto;
  margin-right:auto;
  overflow-y: scroll

  ;
  
  flex-direction: column;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 10vh;
  padding-bottom:0vh;
  text-align: center;
  margin-bottom:2vh;

`;

const Container = styled.div`
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
`;


const MoreSection = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
margin-top:5vh;
`;

const Button = styled.div`
  padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
  border-radius:10px;
  text-align:center;
  background-color:white;
  margin-top:5px;
  margin-bottom:5px;
  margin-left:10px;
  cursor:pointer;
`;
const Block = styled.div`
  margin-top:3vh;
  margin-bottom:3vh;
  
  cursor:pointer;
`;





