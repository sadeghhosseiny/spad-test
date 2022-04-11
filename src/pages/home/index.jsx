import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "../../components/editAndAddUser";
import Modal from "../../components/modal";
import Person from "../../components/person";
import { data } from "../../data";
import { getData } from "../../store/actions";
import styles from "./home.module.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduxData = useSelector((state) => state?.addToListReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  return (
    <>
      <div className={styles["person-container"]}>
        {reduxData?.map((item, i) => (
          <Person index={i} item={item} key={i}></Person>
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
