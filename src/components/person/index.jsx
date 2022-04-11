import React from "react";
import Button from "../button";
import styles from "./person.module.css";

function Person({ item }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["checkbox"]}>
        <input type="checkbox" />
      </div>
      <div className={styles["person-card"]}>
        <div>
          <img src={item?.img} alt="person" />
        </div>
        <div>
          <p>Name : </p>
          <p>Family Name : </p>
          <p>Birth date : </p>
          <p>ID No : </p>
        </div>
        <div>
          <p>{item?.name}</p>
          <p>{item?.FamilyName}</p>
          <p>{item?.BirthDate}</p>
          <p>{item?.IDNo}</p>
        </div>
        <div className={styles["check-btn"]}>
          <Button type="normal">check</Button>
        </div>
      </div>
    </div>
  );
}

export default Person;
