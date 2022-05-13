import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={classes.button}
    >
      {children}
    </button>
  );
};

export default Button;
