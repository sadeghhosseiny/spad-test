import React, { useEffect, useState } from "react";
import Button from "../button";
import styles from "./person.module.css";
import editImage from "../../icons/edit.png";
import Modal from "../modal";
import EditAndAddUser from "../editAndAddUser";
import { useDispatch } from "react-redux";
import { editCheck, editList } from "../../store/actions";
import approvedIcon from "../../icons/approvedIcon.png";
import notApprovedIcon from "../../icons/notApprovedIcon.png";
import Check from "../check";

function Person({ index, item, setAllChecked, searchedText }) {
  const [isModalOpen, setIsModalOpen] = useState({
    editAndAddUser: false,
    check: false,
  });
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(editCheck(item, index, !item.isChecked));
  };

  const handleModal = (name) => {
    name === "edit"
      ? setIsModalOpen({
          editAndAddUser: true,
        })
      : setIsModalOpen({
          check: true,
        });
  };

  useEffect(() => {
    !item.isChecked && setAllChecked(false);
  }, [item.isChecked]);

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["checkbox-and-edit"]}>
          <div onClick={() => handleModal("edit")}>
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
          <div className={styles["user-info-container"]}>
            <div className={styles["user-info-row"]}>
              <p>Name : </p>
              <p
                className={
                  searchedText?.trim()?.length > 0 &&
                  item?.name
                    ?.toLowerCase()
                    ?.includes(searchedText?.toLowerCase()?.trim()) &&
                  styles["highlight-name"]
                }
              >
                {item?.name}
              </p>
            </div>
            <div>
              <p>Family Name : </p>
              <p>{item?.FamilyName}</p>
            </div>
            <div>
              <p>Birth date : </p>
              <p>{item?.BirthDate}</p>
            </div>
            <div>
              <p>ID No : </p>
              <p>{item?.IDNo}</p>
            </div>
            <div>
              <img
                src={item?.isApproved ? approvedIcon : notApprovedIcon}
                alt="status"
              />
            </div>
          </div>
          {!item?.isApproved && (
            <div className={styles["check-btn"]}>
              <Button onClick={() => handleModal("check")} type="normal">
                check
              </Button>
            </div>
          )}
        </div>
      </div>
      {isModalOpen.editAndAddUser && (
        <Modal>
          <EditAndAddUser
            index={index}
            item={item}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Modal>
      )}
      {isModalOpen.check && (
        <Modal>
          <Check
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
