import React from "react";
import cross from "../../icons/cross.png";
import tick from "../../icons/tick.png";

function RowOfInformationOfCheck({
  approveBooleans,
  setApproveBooleans,
  information,
  index,
}) {
  const handleApproveInformationOfUser = (e, name) => {
    setApproveBooleans({
      ...approveBooleans,
      [e.target.name]: name === "cross" ? false : true,
    });
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
        />
        <img
          name={information || "field" + index}
          onClick={handleApproveInformationOfUser}
          src={tick}
          alt="tick"
        />
      </div>
    </div>
  );
}

export default RowOfInformationOfCheck;
