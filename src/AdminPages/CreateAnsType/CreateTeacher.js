import React from "react";
import { useState } from "react";

const CreateTeacher = (props) => {
  const [Name, setName] = useState("");
  const [Pic, setPic] = useState("");
  const [OfficeRoom, setOfficeRoom] = useState("");
  const [Contact, setContact] = useState("");
  const [urlMoreInfo, seturlMoreInfo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      Name,
      Pic,
      OfficeRoom,
      Contact,
      urlMoreInfo,
    };

    console.log("submit value", payload);
    setName("");
    setPic("");
    setOfficeRoom("");
    setContact("");
    seturlMoreInfo("");
  };
  return (
    <div>
      <div className="admin-create-ans-box-info-container">
        <form className="admin-create-ans-box-form-info-container">
          <label>ชื่อ-นามสกุล</label>
          <input
            className="admin-input-info-container"
            id="name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>urlสำหรับรูปภาพ</label>
          <input
            className="admin-input-info-container"
            id="picture"
            type="text"
            value={Pic}
            onChange={(e) => setPic(e.target.value)}
          />
          <label>ออฟฟิศประจำ</label>
          <input
            className="admin-input-info-container"
            id="location"
            type="text"
            value={OfficeRoom}
            onChange={(e) => setOfficeRoom(e.target.value)}
          />
          <label>ช่องทางการติดต่อ</label>
          <input
            className="admin-input-info-container"
            id="email"
            type="text"
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label>urlสำหรับข้อมูลเพิ่มเติม</label>
          <input
            className="admin-input-info-container"
            id="link"
            type="text"
            value={urlMoreInfo}
            onChange={(e) => seturlMoreInfo(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="admin-create-answer-cancle-button "
          onClick={() => props.trigger(false)}
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

export default CreateTeacher;
