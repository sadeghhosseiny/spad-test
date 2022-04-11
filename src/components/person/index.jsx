import React from "react";
import styles from "./person.module.css";

function Person({ item }) {
  return (
    <div className={styles["person-card"]}>
      <div>
        <img src={item.img} alt="person" />
      </div>
      <div>
        <p>Name : </p>
        <p>Family Name : </p>
        <p>Birth date : </p>
        <p>ID No : </p>
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.FamilyName}</p>
        <p>{item.BirthDate}</p>
        <p>{item.IDNo}</p>
      </div>
      <button className={styles["check-btn"]}>check</button>
    </div>
  );
}

export default Person;
