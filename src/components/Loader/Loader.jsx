import React from "react";
import "./Loader.css";
import logo from "@/assets/logo.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="loader-logo" />
      <p className="loader-text">Loading Portfolio...</p>
    </div>
  );
};

export default Loader;
