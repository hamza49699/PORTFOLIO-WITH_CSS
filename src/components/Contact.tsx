
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import '../style/Contact.css'
const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-heading">GET IN TOUCH</h2>
          <p className="contact-subtext">
            PLEASE FILL THIS FORM TO CONTACT ME
          </p>
          <div className="contact-detail">
            <MdOutlineMailOutline size={30} />Hamzakhan.hk1994@gmail.com
          </div>
          <div className="contact-detail">
            <BsTelephoneInbound size={30} />0340-8649699
          </div>
        </div>

        <div className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" className="input" id="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="text" className="input" id="email" />
          </div>
          <div className="form-field">
            <label htmlFor="msg">Enter Your Message</label>
            <textarea className="textarea" id="msg" rows={8}></textarea>
          </div>
          <button className="submit-button">Send now</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
