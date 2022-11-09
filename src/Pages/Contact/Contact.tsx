import "./contact.scss";
import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title">Contact With Me</h1>
      <form className="form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form__group">
            <label htmlFor="name">Your Name</label>
            <input type="text" />
          </div>
          <div className="form__group">
            <label htmlFor="phoneNumber">PHONE NUMBER</label>
            <input type="text" name="phoneNumber" id="phoneNumber" />
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form__group">
          <label htmlFor="sybject">Subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="form__group">
          <label htmlFor="body">YOUR MESSAGE</label>
          <textarea name="body" id="body" rows={40} />
        </div>
        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
