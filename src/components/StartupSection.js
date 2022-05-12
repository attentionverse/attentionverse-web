import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../devSection.css"

function StartupSection({
    title,
    description,
    leftButtonText,
    rightButtonText,
    backgroundImage,
    showDownArrow,
}) {
    const buttonList = [
        {
          "id": 0,
          "name": "MVP1",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 1,
          "name": "MVP2",
          "url": "//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },{
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
        {
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },{
          "id": 2,
          "name": "MVP3",
          "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
        },
      ]
    return (
        <Wrap bgImage={backgroundImage}>
            <ItemText>
                <h1>{"Startup Resources"}</h1>
            </ItemText>

            <div class="container">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
            <MoreSection>
                {
                    buttonList.map((item, index) => (
                        <Button onClick={() => alert("Click Me")}>
                            {item.name}
                        </Button>
                    ))}
            </MoreSection>

        </Wrap>
    );
}


export default StartupSection;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin-left:auto;
  margin-right:auto;
  
  flex-direction: column;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 7vh;
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
justify-content:flex-start;
align-items:center;
`;

const Button = styled.div`
  padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
  border-radius:10px;
  text-align:center;
  background-color:lightgreen;
  margin-top:5px;
  margin-bottom:5px;
  margin-left:10px;
`;





