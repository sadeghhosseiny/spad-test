import React, { useState } from "react";
import Button from "../button";
import styles from "./person.module.css";
import editImage from "../../icons/edit.png";
import Modal from "../modal";
import EditAndAddUser from "../editAndAddUser";

function Person({ index, item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["checkbox-and-edit"]}>
          <div onClick={() => setIsModalOpen(true)}>
            <img src={editImage} alt="edit" />
          </div>
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
      {isModalOpen && (
        <Modal>
          <EditAndAddUser
            index={index}
            item={item}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}
    </>
  );
}

export default Person;
