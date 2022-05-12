import React, {useRef}from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../reachus.css"
import emailjs from '@emailjs/browser';

function ReachUsSection() {
  
  const handleFormSubmit =(event) => {
    event.preventDefault();
  }
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_bh6xzhe', 'template_8lmwpeu', form.current, 'cDjrXWWs4R-4vZNvc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const form = useRef();
{
    return (
      <Wrap>
        <div>
          <ItemText>
            <h1>{"REACH US"}</h1>
          </ItemText>
          <form  ref={form} className="mainform" 
           onSubmit={sendEmail}
          >
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."
            // value={this.state.fname}
            // onChange={e => this.setState({ fname: e.target.value })}
          />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."
            // value={this.state.lname}
            // onChange={e => this.setState({ lname: e.target.value })}
          />
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            // value={this.state.email}
            // onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            // onChange={e => this.setState({ message: e.target.value })}
            // value={this.state.message}
          ></textarea>
          <input type="submit"
          //  onClick={e => this.handleFormSubmit(e)}
            value="Send" />
        </form >
      </div>
      </Wrap >
    );

  }
}
//  onSubmit={this.handleSubmit.bind(this)} method="POST
// input value={this.state.name} onChange={this.onNameChange.bind(this)}
//  text area value={this.state.message} onChange={this.onMessageChange.bind(this)}
// input form group value={this.state.email} onChange={this.onEmailChange.bind(this)}
export default ReachUsSection;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  z-index: 1;
`;

const ItemText = styled.div`
  padding-top: 15vh;
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

const LeftButton = styled.div`
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  animation: bounce infinite 1.5s;
`;
