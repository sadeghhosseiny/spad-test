import React, { useState } from "react";
import Button from "../../button";
import styles from "./check.module.css";
import cross from "../../../assets/icons/cross.png";
import tick from "../../../assets/icons/tick.png";
import { manageApprovement } from "../../../store/actions";
import { useDispatch } from "react-redux";
import RowOfInformationOfCheck from "./checkInformationRow";

function Check({ setIsModalOpen, item, index }) {
  const [approveBooleans, setApproveBooleans] = useState(null);

  const [selectCrossOrTick, setSelectCrossOrTick] = useState("");

  const { name, FamilyName, IDNo, BirthDate, address, mobile } = item;

  const arrayOfInformation = [
    name,
    FamilyName,
    mobile,
    IDNo,
    BirthDate,
    address,
  ];

  const handleApproveInformationOfUser = (e, name) => {
    setApproveBooleans({
      ...approveBooleans,
      [e.target.name]: name === "cross" ? false : true,
    });
    name === "cross"
      ? setSelectCrossOrTick("cross")
      : setSelectCrossOrTick("tick");
  };

  const dispatch = useDispatch();

  const handleApproveUser = () => {
    const arrayOfBooleans = Object.values(approveBooleans);
    const numberOfTrues = arrayOfBooleans.filter(
      (item) => item === true
    ).length;
    numberOfTrues === 7 && dispatch(manageApprovement(index));
    setIsModalOpen({ userInfo: false });
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
              className={selectCrossOrTick === "cross" && styles["cross"]}
            />
            <img
              name="pic"
              onClick={handleApproveInformationOfUser}
              src={tick}
              alt="tick"
              className={selectCrossOrTick === "tick" && styles["tick"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["btns"]}>
        <Button
          comp="modal"
          onClick={() => setIsModalOpen({ check: false })}
          type="back"
        >
          back
        </Button>
        <Button comp="modal" onClick={handleApproveUser} type="normal">
          save
        </Button>
      </div>
    </div>
  );
}

export default Check;
