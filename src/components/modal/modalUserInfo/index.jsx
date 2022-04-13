import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToList, editList } from "../../../store/actions";
import Button from "../../button";
import InputField from "../../inputField";
import styles from "./userInfo.module.css";
import cameraIcon from "../../../assets/icons/cameraIcon.png";

function UserInfo({ setIsModalOpen, item, index }) {
  const [informationOfUsers, setInformationOfUser] = useState(null);
  const [isClickedOnSave, setIsClickedOnSave] = useState(false);

  const imagePickerRef = useRef(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleDispatchDataToList = () => {
    !informationOfUsers?.name && setIsClickedOnSave(true);
    if (informationOfUsers?.name) {
      item?.name
        ? dispatch(editList(informationOfUsers, index))
        : dispatch(addToList(informationOfUsers));
    }

    informationOfUsers?.name && setIsModalOpen(false);
  };

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
      setInformationOfUser({
        ...informationOfUsers,
        [e.target.name]: readerEvent.target.result,
      });
    };
  };

  useEffect(() => {
    item?.name
      ? setInformationOfUser({ ...item, isChecked: false })
      : setInformationOfUser({ ...item, isChecked: false, isApproved: false });
  }, []);

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["inputs-container"]}>
          <InputField
            data={informationOfUsers?.name}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="name"
            title="Name"
          />
          <InputField
            data={informationOfUsers?.FamilyName}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="FamilyName"
            title="Family Name"
          />
          <InputField
            data={informationOfUsers?.mobile}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="mobile"
            title="Mobile"
          />
          <InputField
            data={informationOfUsers?.IDNo}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="IDNo"
            title="ID No"
          />
          <InputField
            data={informationOfUsers?.BirthDate}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="BirthDate"
            title="Birth date"
          />
          <InputField
            data={informationOfUsers?.address}
            informationOfUsers={informationOfUsers}
            setInformationOfUser={setInformationOfUser}
            name="address"
            title="Address"
          />
          <div
            className={styles["picture-container"]}
            onClick={() => imagePickerRef.current.click()}
          >
            <p>Profile Pic: </p>
            {image || informationOfUsers?.img ? (
              <img src={image || informationOfUsers?.img} alt="avatar" />
            ) : (
              <div className={styles["photo"]}>
                <img src={cameraIcon} alt="avatar" />
              </div>
            )}
            <input
              type="file"
              onChange={addImage}
              hidden
              ref={imagePickerRef}
              name="img"
            />
          </div>
        </div>
      </div>
      <div className={styles["btns"]}>
        <Button
          comp="modal"
          onClick={() => setIsModalOpen(false, { userInfo: false })}
          type="back"
        >
          back
        </Button>
        <Button comp="modal" onClick={handleDispatchDataToList} type="normal">
          save
        </Button>
      </div>
      {isClickedOnSave && !informationOfUsers?.name && (
        <p className={styles["error-text"]}>must has a name</p>
      )}
    </div>
  );
}

export default UserInfo;
