import React from "react";

const ContactUs = () => {
  return (
    <div id="contact">
      <p>Get in Touch</p>
      <h2>contact Me</h2>
      <div className="line">
        <div className="u-line"></div>
      </div>

      <div className="contactme">
        <div className="c-left">
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p>pitamdas462@gmail.com</p>
            <a href="mailto: pitamdas462@gmail.com" target="_blank">
              Send a Massages
            </a>
          </div>
          <div className="whatsapp">
            <i class="fa-brands fa-whatsapp"></i>
            <p>Whatsapp</p>
            <p>+918335899529</p>
            <a href="https://wa.me/918335899529?text=Hi%2C%20How%20can%20i%20help%20you">
              Send a massage
            </a>
          </div>
        </div>
        <div className="c-right">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              name="eamil"
              id="email"
              placeholder="Your Email"
            />
            <textarea
              name="massage"
              id="text-massage"
              cols="30"
              rows="10"
              placeholder="Your Massage"
            ></textarea>
            <input type="submit" value="Send Massage" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
