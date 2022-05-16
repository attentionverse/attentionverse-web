import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Playground from 'javascript-playgrounds'
import AceEditor from "react-ace";
import * as CaseStudyActions from '../redux/actions/CaseStudyAction'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { split as SplitEditor } from "react-ace";
import { connect } from 'react-redux'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-noconflict/ace';


// https://snack.expo.dev/@sthir/chat-screen
const buttonList = [
  {
    "id": 0,
    "name": "Wannabe App",
    "section_one": "https://www.figma.com/file/For3z1qjtCOX0IQUbPD0xB/wannabae.live?node-id=0%3A1",
    "section_two": "https://unpkg.com/javascript-playgrounds@1.1.4/public/index.html#data=%7B%0A%20%20%20%20%22preset%22%3A%20%22react-native%22%2C%0A%20%20%20%20%22fullscreen%22%3A%20true%2C%0A%20%20%20%20%22panes%22%3A%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%22editor%22%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22player%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22platform%22%3A%20%22ios%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22width%22%3A%20130%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22scale%22%3A%200.75%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22code%22%3A%20%22%22%0A%7D",
    "section_three": "https://snack.expo.dev/@sthir/chat-screen",
    "section_four": ""
  },
  {
    "id": 1,
    "name": "Uplo App",
    "section_one": "https://www.figma.com/file/ADg7NCPLGH0TarxmFQcUvR/netflix-screens",
    "section_two": "https://snack.expo.dev/@sthir/chat-screen",
    "section_three": "//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html",
    "section_four": ""
  },
  {
    "id": 2,
    "name": "Netflix App",
    "section_one": "https://www.figma.com/file/For3z1qjtCOX0IQUbPD0xB/wannabae.live?node-id=0%3A1",
    "section_two": "https://snack.expo.dev/@sthir/chat-screen",
    "section_three": "//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html",
    "section_four": ""
  },
  {
    "id": 3,
    "name": " Pollinate",
    "section_one": "https://www.figma.com/file/For3z1qjtCOX0IQUbPD0xB/wannabae.live?node-id=0%3A1",
    "section_two": "https://snack.expo.dev/@sthir/chat-screen",
    "section_three": "https://snack.expo.dev/@sthir/chat-screen",
    "section_four": ""
  },

]

class CaseStudySection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      MVP1Status: false
    }
  }

  onPress = (id) => {
    console.log(" CaseStudy.js onPress() value  id : ", id)
    const Data = buttonList.filter(item => item.id == id)
    this.props.saveData(Data)
  }

  render() {
    const {
      title,
      description,
      leftButtonText,
      rightButtonText,
      backgroundImage,
      showDownArrow,
    } = this.props;

    console.log("Case Study.js hi this is the value : ", this.props.mvpData)
    return (
      <Wrap 
      bgImage={this.props.backgroundImage} 
      id={title.replace(/ /g,"_")}
      >
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
          </ItemText>
          <ButtonBox>
            {
              buttonList.map((item, index) => (
                <Button onClick={() => this.onPress(item.id)}>
                  {item.name}
                </Button>
              ))}
          </ButtonBox>
          {
            this.props.caseStudyData.map((item, index) => (
              <Container>
                <h3>1. Idea to Design</h3>
                <Section>
                  <Figma>
                    <iframe
                      frameborder="2"
                      height="450"
                      width="100%"
                      src={"https://www.figma.com/embed?embed_host=astra&url=" + item.section_one}
                      allowfullscreen
                    />
                  </Figma>
                </Section>
                <h3>2. Design to Screen</h3>
                <Section>
                  <iframe
                    frameborder="2"
                    width={"100%"}
                    height={"450"}

                    src={item.section_two}
                  >
                  </iframe>
                </Section>
                <h3>3. Screen to Functionality</h3>
                <Section>
                  <SplitEditor
                    mode="json"
                    theme="monokai"
                    splits={1}
                    orientation="beside"
                    value={""}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    showGutter={true}
                    highlightActiveLine={true}
                    width={{ flex: 1 }}
                    showPrintMargin={false}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippet={true}
                    tabSize={4}
                    cursorStart={1}
                  />
                </Section>
                <Section>
                  <iframe
                    frameborder="2"
                    width={"100%"}
                    height={"450"}

                    src={item.section_three}
                  >
                  </iframe>
                </Section>
                <h3>4. Publish App</h3>
                <Section>
                  <iframe
                    frameborder="2"
                    width={"100%"}
                    height={"450"}

                    src={"//unpkg.com/javascript-playgrounds@^1.0.0/public/index.html"}
                  >
                  </iframe>
                </Section>
                <a href="/" >Download App</a>
                <h4>More Case Studies</h4>
                <MoreSection>
                  {
                    buttonList.map((item, index) => (
                      <Button onClick={() => alert("Click Me")}>
                        {item.name}
                      </Button>
                    ))}
                </MoreSection>
              </Container>
            ))}
        </Fade>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
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

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  flex-wrap:wrap;

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
const Figma = styled.div`
  
`;
const FigmaBox = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  border-color:red;
  border-width:3px;
  border:1px solid black;
  background-color:black ;

`;
const Container = styled.div`
margin-left:10px;
margin-right:10px;
`;

const Section = styled.div`
margin-top:5px;
margin-bottom:5px;
`;

const MoreSection = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:flex-start;
align-items:center;
`;


const mapStateToProps = (state) => ({
  caseStudyData: state.study.case_study_data

})

const mapDispatchToProps = (dispatch) => ({
  saveData: (q) => dispatch(CaseStudyActions.saveData(q))

})

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudySection)