import React, { useState } from "react";
import Button from "../button";
import styles from "./check.module.css";
import cross from "../../icons/cross.png";
import tick from "../../icons/tick.png";
import { manageApprovement } from "../../store/actions";
import { useDispatch } from "react-redux";
import RowOfInformationOfCheck from "../rowOfInformationOfCheck";

function Check({ setIsModalOpen, item, index }) {
  const [approveBooleans, setApproveBooleans] = useState(null);

  const { name, FamilyName, IDNo, BirthDate, address, mobile } = item;

  const arrayOfInformation = [
    name,
    FamilyName,
    IDNo,
    BirthDate,
    address,
    mobile,
  ];

  const handleApproveInformationOfUser = (e, name) => {
    setApproveBooleans({
      ...approveBooleans,
      [e.target.name]: name === "cross" ? false : true,
    });
  };

  const dispatch = useDispatch();

  const handleApproveUser = () => {
    const arrayOfBooleans = Object.values(approveBooleans);
    const numberOfTrues = arrayOfBooleans.filter(
      (item) => item === true
    ).length;
    numberOfTrues === 7 && dispatch(manageApprovement(index));
    setIsModalOpen({ editAndAddUser: false });
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <div className={styles["texts-container"]}>
          <div>
            <p>Name: </p>
          </div>
          <div>
            <p>Family Name: </p>
          </div>
          <div>
            <p>Mobile: </p>
          </div>
          <div>
            <p>ID No: </p>
          </div>
          <div>
            <p>Birth date: </p>
          </div>
          <div>
            <p>Address: </p>
          </div>
        </div>
        <div className={styles["info-container"]}>
          {arrayOfInformation.map((item, i) => (
            <RowOfInformationOfCheck
              approveBooleans={approveBooleans}
              setApproveBooleans={setApproveBooleans}
              information={item}
              index={i}
            />
          ))}
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <p>Profile Pic: </p>
        <div>
          <img src={item?.img} alt="avatar" />
          <div>
            <img
              name="pic"
              onClick={(e) => handleApproveInformationOfUser(e, "cross")}
              src={cross}
              alt="cross"
            />
            <img
              name="pic"
              onClick={handleApproveInformationOfUser}
              src={tick}
              alt="tick"
            />
          </div>
        </div>
      </div>
      <div className={styles["btns"]}>
        <Button onClick={handleApproveUser} type="normal">
          save
        </Button>
        <Button onClick={() => setIsModalOpen({ check: false })} type="back">
          back
        </Button>
      </div>
    </div>
  );
}

export default Check;
