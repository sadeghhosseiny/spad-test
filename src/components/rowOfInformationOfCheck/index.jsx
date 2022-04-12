import React, { useState } from "react";
import cross from "../../icons/cross.png";
import tick from "../../icons/tick.png";
import styles from "./rowOfInfo.module.css";

function RowOfInformationOfCheck({
  approveBooleans,
  setApproveBooleans,
  information,
  index,
}) {
  const [selectCrossOrTick, setSelectCrossOrTick] = useState("");

  const handleApproveInformationOfUser = (e, name) => {
    setApproveBooleans({
      ...approveBooleans,
      [e.target.name]: name === "cross" ? false : true,
    });
    name === "cross"
      ? setSelectCrossOrTick("cross")
      : setSelectCrossOrTick("tick");
  };

  return (
    <div>
      <p>{information || "not entered"}</p>
      <div>
        <img
          name={information || "field" + index}
          onClick={(e) => handleApproveInformationOfUser(e, "cross")}
          src={cross}
          alt="cross"
          className={selectCrossOrTick === "cross" && styles["cross"]}
        />
        <img
          name={information || "field" + index}
          onClick={handleApproveInformationOfUser}
          src={tick}
          alt="tick"
          className={selectCrossOrTick === "tick" && styles["tick"]}
        />
      </div>
    </div>
  );
}

export default RowOfInformationOfCheck;
