import React, { useState } from "react";
import close from "../../img/close (3).png";

const EditMajorElective = (props) => {
  const [CourseCode, setCourseCode] = useState("");
  const [Name, setName] = useState("");
  const [urlDesc, seturlDesc] = useState("");
  const onCancle = (e) => {
    e.preventDefault();
    setCourseCode("");
    setName("");
    seturlDesc("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      CourseCode,
      Name,
      urlDesc,
    };

    console.log("submit value", payload);
    setCourseCode("");
    setName("");
    seturlDesc("");
  };
  return (
    <div className="admin-popup-edit-ans-box">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="admin-button"
          onClick={() => {
            props.trigger(false);
          }}
        >
          <img src={close} style={{ width: "15px", height: "15px" }}></img>
        </button>
      </div>
      <h2>Edit answer</h2>
      <div className="admin-create-ans-box-info-container">
        <form className="admin-create-ans-box-form-info-container">
          <label>รหัสวิชา</label>
          <input
            className="admin-input-info-container"
            id="course_code"
            type="text"
            value={CourseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
          <label>ชื่อวิชา</label>
          <input
            className="admin-input-info-container"
            id="name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>urlสำหรับdescription</label>
          <input
            className="admin-input-info-container"
            id="link_description"
            type="text"
            value={urlDesc}
            onChange={(e) => seturlDesc(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="admin-create-answer-cancle-button "
          onClick={() => {
            props.trigger(false);
          }}
        >
          Cancle
        </div>
        <div className="admin-create-answer-done-button" onClick={onSubmit}>
          Done
        </div>
      </div>
    </div>
  );
};

export default EditMajorElective;
