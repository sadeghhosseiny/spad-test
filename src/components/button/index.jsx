import React from "react";
import styles from "./button.module.css";

function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={type === "normal" ? styles["btn"] : styles["btn-back"]}
    >
      {children}
    </button>
  );
}

export default Button;
