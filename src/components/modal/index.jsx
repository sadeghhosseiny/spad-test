import React from "react";
import styles from "./modal.module.css";

function Modal({ children }) {
  return <div className={styles["modal"]}>{children}</div>;
}

export default Modal;
