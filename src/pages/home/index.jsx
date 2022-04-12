import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditAndAddUser from "../../components/editAndAddUser";
import Modal from "../../components/modal";
import Person from "../../components/person";
import { data } from "../../data";
import { editCheck, getData } from "../../store/actions";
import styles from "./home.module.css";
import searchIcon from "../../icons/searchIcon.png";
import trashCan from "../../icons/trashCanIcon.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersData = useSelector((state) => state?.addToListReducer.data);

  const dispatch = useDispatch();

  const [allChecked, setAllChecked] = useState(false);

  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  const handleCheckboxChange = () => {
    dispatch(editCheck(allChecked));
    setAllChecked(!allChecked);
  };

  const handleUncheckAllTrashIcons = () => {
    dispatch(editCheck("uncheckAll"));
    setAllChecked(false);
  };

  return (
    <>
      <div className={styles["person-container"]}>
        <div className={styles["search-input"]}>
          <input
            placeholder="جستجوی نام فرد"
            onChange={(e) => setSearchedText(e.target.value)}
            type="text"
          />
          <img src={searchIcon} alt="search" />
        </div>
        <div className={styles["checkbox-and-trash-can"]}>
          {usersData.find((item) => item.isChecked) && (
            <img
              onClick={handleUncheckAllTrashIcons}
              src={trashCan}
              alt="trash-can"
            />
          )}

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
                searchedText={searchedText}
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
                searchedText={searchedText}
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
          <EditAndAddUser setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
}

export default Home;
