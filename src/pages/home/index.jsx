import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddUser from "../../components/addUser";
import Modal from "../../components/modal";
import Person from "../../components/person";
import { data } from "../../data";
import styles from "./home.module.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduxData = useSelector((state) => state?.addToListReducer.data);
  return (
    <>
      <div className={styles["person-container"]}>
        {data.map((item, i) => (
          <Person item={item} key={i}></Person>
        ))}
        {reduxData?.map((item, i) => (
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
          <AddUser setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
}

export default Home;
