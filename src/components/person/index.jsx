import React, { useEffect, useState } from "react";
import Button from "../button";
import styles from "./person.module.css";
import editImage from "../../icons/edit.png";
import Modal from "../modal";
import EditAndAddUser from "../editAndAddUser";
import { useDispatch } from "react-redux";
import { editCheck, editList } from "../../store/actions";

function Person({ index, item, setAllChecked }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(editCheck(item, index, !item.isChecked));
  };

  useEffect(() => {
    !item.isChecked && setAllChecked(false);
  }, [item.isChecked]);

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["checkbox-and-edit"]}>
          <div onClick={() => setIsModalOpen(true)}>
            <img src={editImage} alt="edit" />
          </div>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            checked={item.isChecked}
          />
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
            isModalOpen={isModalOpen}
          />
        </Modal>
      )}
    </>
  );
}

export default Person;
