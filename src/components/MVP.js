import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Playground from 'javascript-playgrounds';
import { connect } from 'react-redux'
import * as MVPActions from "../redux/actions/MVPAction";
import "../index.css"


const buttonList = [
  {
    "id": 0,
    "name": "React Native",
    "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
  },
  {
    "id": 1,
    "name": "JavaScript Playground",
    "url": "//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html"
  },
  {
    "id": 2,
    "name": "React Native",
    "url": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D"
  },
]

class MVPSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      MVP1Status: false
    }
  }

  onPress = (id) => {
   
    console.log(" MVP.js onPress() value  id : ", id)
    const fun = buttonList.filter(item => item.id == id)
    this.props.saveMVP(fun)
  }

  render() {
   const  {
      title,
      description,
      leftButtonText,
      rightButtonText,
      backgroundImage,
      showDownArrow,
    } = this.props;
    console.log(" MVP.js  hi this is the value : ",this.props.mvpData)
    return (
      

      <Wrap  id={title.replace(/ /g,"_")}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
          </ItemText>
          <PlayGround>
            <ButtonBox>
              {
                buttonList.map((item, index) => (
                  <Button onClick={() => {
                  this.onPress(item.id)
                  }}>
                   <text id="MVP_TEXT">{item.name}</text> 
                  </Button>
                ))}
            </ButtonBox>
            <Editor>
              {
                this.props?.mvpData.map((item, index) => (
                  <iframe
                    frameborder="0"
                    width={"100%"}
                    height={"100%"}
                    src={item.url}
                  >
                  </iframe>
                ))}

            </Editor>

          </PlayGround>
        </Fade>
      </Wrap>
    )

  }

}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background - image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
  z-index: 1;
  `;

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
  `;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  `;

const PlayGround = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  border-width:3px;
  border:1px solid black;
  background-color:black ;
  border:1px solid white;

  `;

const ButtonBox = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:5px;
  padding-left:5px;
          

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
  cursor:pointer;
  
  `;
const Editor = styled.div`
  border:1px solid white;
  background-color:white;
  display:flex;
  width: 100vw;
  height:80vh;
`;

const mapStateToProps = (state) => ({
  mvpData: state.mvp.mvp_data
 
})

const mapDispatchToProps = (dispatch) => ({
  saveMVP: (q) => dispatch(MVPActions.saveMVP(q))

})

export default connect(mapStateToProps, mapDispatchToProps)(MVPSection)
