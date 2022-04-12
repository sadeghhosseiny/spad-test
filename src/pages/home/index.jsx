import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "../../components/editAndAddUser";
import Modal from "../../components/modal";
import Person from "../../components/person";
import { data } from "../../data";
import { editCheck, getData } from "../../store/actions";
import styles from "./home.module.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersData = useSelector((state) => state?.addToListReducer.data);
  const isChecked = useSelector(
    (state) => state?.addToListReducer.data.isChecked
  );
  const dispatch = useDispatch();

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  const handleCheckboxChange = () => {
    dispatch(editCheck(allChecked));
    setAllChecked(!allChecked);
  };

  return (
    <>
      <div className={styles["person-container"]}>
        <div className={styles["checkbox-for-all"]}>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            checked={allChecked}
          />
        </div>
        {usersData?.map(
          (item, index) =>
            item.isChecked && (
              <Person
                setAllChecked={setAllChecked}
                index={index}
                item={item}
                key={index}
              />
            )
        )}
        {usersData?.map(
          (item, index) =>
            !item.isChecked && (
              <Person
                setAllChecked={setAllChecked}
                index={index}
                item={item}
                key={index}
              />
            )
        )}
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
