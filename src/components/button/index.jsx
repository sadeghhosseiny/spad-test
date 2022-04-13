import React from "react";
import styles from "./button.module.css";

function Button({ comp, type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${comp === "modal" && styles["btn-modal"]} ${
        type === "normal" ? styles["btn"] : styles["btn-back"]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
