import React from "react";
import "./ScrollButtons.css";

const ScrollButtons = () => {
  const scrollToTop = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-button" onClick={scrollToTop}>↑</button>
      <button className="scroll-button" onClick={scrollToBottom}>↓</button>
    </div>
  );
};

export default ScrollButtons;
