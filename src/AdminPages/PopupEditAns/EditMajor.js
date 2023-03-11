import React, { useState } from "react";
import close from "../../img/close (3).png";

const EditMajor = (props) => {
  const [CourseCode, setCourseCode] = useState("");
  const [Name, setName] = useState("");
  const [Term, setTerm] = useState("");
  const [Day, setDay] = useState("");
  const [Time, setTime] = useState("");
  const onCancle = (e) => {
    e.preventDefault();
    setCourseCode("");
    setName("");
    setTerm("");
    setDay("");
    setTime("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      CourseCode,
      Name,
      Term,
      Day,
      Time,
    };

    console.log("submit value", payload);
    setCourseCode("");
    setName("");
    setTerm("");
    setDay("");
    setTime("");
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
          <label>ภาคเรียนที่เปิดสอน</label>
          <input
            className="admin-input-info-container"
            id="term"
            type="text"
            value={Term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <label>วันที่เรียน</label>
          <input
            className="admin-input-info-container"
            id="day"
            type="text"
            value={Day}
            onChange={(e) => setDay(e.target.value)}
          />
          <label>ช่วงเวลาที่เรียน</label>
          <input
            className="admin-input-info-container"
            id="time"
            type="text"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
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

export default EditMajor;
