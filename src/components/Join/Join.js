import React from 'react';
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wi0e1j5', 'template_jruzj2v', form.current, 'tRDsJSF7j9yKO5VI3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-join">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US</span>
            </div>
        </div>

        <div className="right-join">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email address' />
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;