import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../store/actions";
import Button from "../button";
import InputField from "../inputField";
import styles from "./addUser.module.css";

function AddUser({ setIsModalOpen }) {
  const [info, setInfo] = useState({});
  const dispatch = useDispatch();

  const handleDispatchDataToList = () => {
    dispatch(addToList(info));
  };

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["name-container"]}>
          <p>Name: </p>
          <p>Family Name: </p>
          <p>Mobile: </p>
          <p>ID No: </p>
          <p>Birth date: </p>
          <p>Address: </p>
        </div>
        <div>
          <InputField info={info} setInfo={setInfo} name="name" />
          <InputField info={info} setInfo={setInfo} name="FamilyName" />
          <InputField info={info} setInfo={setInfo} name="mobile" />
          <InputField info={info} setInfo={setInfo} name="IDNo" />
          <InputField info={info} setInfo={setInfo} name="BirthDate" />
          <InputField info={info} setInfo={setInfo} name="address" />
        </div>
      </div>
      <div className={styles["btns"]}>
        <Button onClick={handleDispatchDataToList} type="normal">
          save
        </Button>
        <Button onClick={() => setIsModalOpen(false)} type="back">
          back
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
