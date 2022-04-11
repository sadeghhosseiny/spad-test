import React, { useState } from "react";
import AddUser from "../../components/addUser";
import Modal from "../../components/modal";
import Person from "../../components/person";
import { data } from "../../data";
import styles from "./home.module.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={styles["person-container"]}>
        {data.map((item, i) => (
          <Person item={item} key={i}></Person>
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles["add-btn"]}
        >
          +
        </button>
      </div>
      {isModalOpen && (
        <Modal>
          <AddUser />
        </Modal>
      )}
    </>
  );
}

export default Home;
