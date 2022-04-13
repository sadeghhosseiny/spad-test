import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../../components/modal/modalUserInfo";
import Modal from "../../components/modal";
import UserCard from "../../components/userCard";
import { data } from "../../mockData";
import { editCheck, getData } from "../../store/actions";
import styles from "./home.module.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import trashCan from "../../assets/icons/trashCanIcon.png";
import ellipse from "../../assets/icons/ellipse.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersData = useSelector((state) => state?.addToListReducer.data);

  const dispatch = useDispatch();

  const [allChecked, setAllChecked] = useState(false);
  const [counterOfIsChecked, setCounterOfIsChecked] = useState(0);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  const handleCheckboxChange = () => {
    dispatch(editCheck(allChecked));
    allChecked && dispatch(editCheck("uncheckAll"));
    setAllChecked(!allChecked);
  };

  const handleUncheckAllTrashIcons = () => {
    dispatch(editCheck("uncheckAll"));
    setAllChecked(false);
  };

  useEffect(() => {
    const numberOfTrues = usersData.filter(
      (item) => item.isChecked === true
    ).length;
    numberOfTrues === usersData.length && setAllChecked(true);
  }, [counterOfIsChecked]);

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
          {!allChecked && usersData.find((item) => item.isChecked) && (
            <img
              className={styles["ellipse"]}
              onClick={handleCheckboxChange}
              src={ellipse}
              alt="ellipse"
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
              <UserCard
                length={usersData.length}
                setCounterOfIsChecked={setCounterOfIsChecked}
                counterOfIsChecked={counterOfIsChecked}
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
              <UserCard
                length={usersData.length}
                setCounterOfIsChecked={setCounterOfIsChecked}
                counterOfIsChecked={counterOfIsChecked}
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
          <UserInfo setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </>
  );
}

export default Home;
