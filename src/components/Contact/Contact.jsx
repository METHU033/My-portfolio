import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import theme_pattern from "@/assets/theme_pattern.png";
import mail_icon from "@/assets/mail_icon.png";
import phone_icon from "@/assets/phone_icon.png";
import location_icon from "@/assets/location_icon.png";

const Contact = () => {
  const [message, setMessage] = useState({ text: "", type: "" });
  const messageRef = useRef(null);

  useEffect(() => {
    if (message.text && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [message.text]);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4330a004-8965-44df-bf7a-e1e3c1fc8bf2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // Clear the form
        event.target.reset();
        setMessage({
          text: "Message sent successfully! Thank you for contacting me.",
          type: "success",
        });
        // Clear message after 5 seconds
        setTimeout(() => setMessage({ text: "", type: "" }), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({
        text: "Oops! Something went wrong. Please try again later.",
        type: "error",
      });
      // Clear message after 5 seconds
      setTimeout(() => setMessage({ text: "", type: "" }), 5000);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <p>dushimemethucella03@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" /> <p>+250 784 728 508</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>KIGALI, RWANDA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
          {message.text && (
            <div ref={messageRef} className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
