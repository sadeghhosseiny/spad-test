import React from "react";
import styles from "./inputField.module.css";

function InputField({
  name,
  setInformationOfUser,
  informationOfUsers,
  data,
  title,
}) {
  const handleSetFormData = (e) => {
    setInformationOfUser({
      ...informationOfUsers,
      [name]: e.target.value,
    });
  };

  return (
    <div className={styles["input-container"]}>
      <p>{title}: </p>
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
