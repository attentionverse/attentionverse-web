import React, { useRef, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../reachus.css"
import emailjs from '@emailjs/browser';

function ReachUsSection({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
  showDownArrow,
}) {
  const [email, setEmail] = useState('')
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const sendEmail = (e) => {
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      // subject: subject,
      // message_html: message,
    }
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
      <Wrap id={title.replace(/ /g,"_")}>
        <div>
          <ItemText>
            <h1>{title}</h1>
          </ItemText>
          <form ref={form} id="FORM"
            onSubmit={
              sendEmail
            }
          >
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email"
              onChange={e => setEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea 
            id="message" 
            name="message" 
            placeholder="Write something.."
            rows={4}
          ></textarea>
            <input type="submit" value="Send" />
          </form >
        </div>
      </Wrap >
    );

  }
}

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
  color:'white'
`;
