import React from "react";
import styles from "./inputField.module.css";

function InputField({ name, setInfo, info }) {
  const handleSetFormData = (e) => {
    setInfo({
      ...info,
      [name]: e.target.value,
    });
  };

  return (
    <div className={styles["input-container"]}>
      <input
        name={name}
        onChange={handleSetFormData}
        className={styles["input-field"]}
        type="text"
      />
    </div>
  );
}

export default InputField;
