import React, { useEffect, useState } from "react";
import Button from "../button";
import styles from "./userCard.module.css";
import editImage from "../../assets/icons/edit.png";
import Modal from "../modal";
import UserInfo from "../modal/modalUserInfo";
import { useDispatch } from "react-redux";
import { editCheck } from "../../store/actions";
import approvedIcon from "../../assets/icons/approvedIcon.png";
import notApprovedIcon from "../../assets/icons/notApprovedIcon.png";
import Check from "../modal/modalCheck";
import avatar from "../../assets/icons/avatar.png";

function UserCard({
  counterOfIsChecked,
  setCounterOfIsChecked,
  length,
  index,
  item,
  setAllChecked,
  searchedText,
}) {
  const [isModalOpen, setIsModalOpen] = useState({
    userInfo: false,
    check: false,
  });
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(editCheck(item, index, !item.isChecked));
  };

  const handleModal = (name) => {
    name === "edit"
      ? setIsModalOpen({
          userInfo: true,
        })
      : setIsModalOpen({
          check: true,
        });
  };

  useEffect(() => {
    !item.isChecked && setAllChecked(false);

    item.isChecked && setCounterOfIsChecked(counterOfIsChecked + 1);
  }, [item.isChecked]);

  return (
    <>
      <div
        className={`${item.isChecked && styles["shadow-card"]} ${
          styles["card-container"]
        }`}
      >
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
            <img src={item?.img || avatar} alt="person" />
          </div>
          <div className={styles["user-info-container"]}>
            <div>
              <div className={styles["user-info-row"]}>
                <p className={styles["texts"]}>Name : </p>
                <p className={styles["texts"]}>Family Name : </p>
                <p className={styles["texts"]}>Birth date : </p>
                <p className={styles["texts"]}>ID No : </p>
              </div>
              <div>
                <p
                  className={`${styles["user-info"]} ${
                    searchedText?.trim()?.length > 0 &&
                    item?.name
                      ?.toLowerCase()
                      ?.includes(searchedText?.toLowerCase()?.trim()) &&
                    styles["highlight-name"]
                  }`}
                >
                  {item?.name}
                </p>
                <p className={styles["user-info"]}>
                  {item?.FamilyName || "not entered"}
                </p>
                <p className={styles["user-info"]}>
                  {item?.BirthDate || "not entered"}
                </p>
                <p className={styles["user-info"]}>
                  {item?.IDNo || "not entered"}
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={item?.isApproved ? approvedIcon : notApprovedIcon}
                  alt="status"
                />
              </div>
              {!item?.isApproved && (
                <div className={styles["check-btn"]}>
                  <Button
                    comp="card"
                    onClick={() => handleModal("check")}
                    type="normal"
                  >
                    check
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen.userInfo && (
        <Modal>
          <UserInfo
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

export default UserCard;
