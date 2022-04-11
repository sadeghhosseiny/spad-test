import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToList, editList } from "../../store/actions";
import Button from "../button";
import InputField from "../inputField";
import styles from "./editAndAddUser.module.css";

function EditAndAddUser({ setIsModalOpen, item, index }) {
  const [info, setInfo] = useState();
  // const [inf, setInf] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setInfo(item);
  }, []);

  const handleDispatchDataToList = () => {
    item?.name ? dispatch(editList(info, index)) : dispatch(addToList(info));
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
          <InputField
            data={info?.name}
            info={info}
            setInfo={setInfo}
            name="name"
          />
          <InputField
            data={info?.FamilyName}
            info={info}
            setInfo={setInfo}
            name="FamilyName"
          />
          <InputField
            data={info?.mobile}
            info={info}
            setInfo={setInfo}
            name="mobile"
          />
          <InputField
            data={info?.IDNo}
            info={info}
            setInfo={setInfo}
            name="IDNo"
          />
          <InputField
            data={info?.BirthDate}
            info={info}
            setInfo={setInfo}
            name="BirthDate"
          />
          <InputField
            data={info?.address}
            info={info}
            setInfo={setInfo}
            name="address"
          />
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

export default EditAndAddUser;
