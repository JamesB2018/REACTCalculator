import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
  render() {
    return <div className="input" />;
  }
}

export default Input;
