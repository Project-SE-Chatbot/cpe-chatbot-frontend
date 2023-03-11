import React from "react";
import { useState } from "react";

const CreateRegister = (props) => {
  const [Name, setName] = useState("");
  const [url, seturl] = useState("");
  const onCancle = (e) => {
    e.preventDefault();
    setName("");
    seturl("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      Name,
      url,
    };

    console.log("submit value", payload);
    setName("");
    seturl("");
  };
  return (
    <div>
      <div className="admin-create-ans-box-info-container">
        <form className="admin-create-ans-box-form-info-container">
          <label>หัวข้อเกี่ยวกับการรับเข้าเรียน</label>
          <input
            className="admin-input-info-container"
            id="name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>urlสำหรับข้อมูลเพิ่มเติม</label>
          <input
            className="admin-input-info-container"
            id="link"
            type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="admin-create-answer-cancle-button "
          onClick={(e) => {
            props.trigger(false);
            onCancle(e);
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

export default CreateRegister;
