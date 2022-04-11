import React from "react";
import styles from "./inputField.module.css";

function InputField({ name, setInfo, info, data }) {
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
        value={data}
      />
    </div>
  );
}

export default InputField;
