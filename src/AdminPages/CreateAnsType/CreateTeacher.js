import React from "react";
import { useState } from "react";

const CreateTeacher = (props) => {
  const [name, setname] = useState("");
  const [pictue, setpictue] = useState("");
  const [location, setlocation] = useState("");
  const [time, settime] = useState('');
  const [email, setemail] = useState("");
  const [link, setlink] = useState("");
  const onCancle = (e) => {
    setname("");
    setpictue("");
    setlocation("");
    settime("");
    setemail("");
    setlink("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      pictue,
      location,
      time,
      email,
      link,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    fetch('http://localhost:5000/teacher', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));

    const requestKey = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          key_1: name,
          key_2:"",
          key_3:"",
          key_4:"",
          key_5:"",
          key_6:""
        })
    };
    fetch('http://localhost:5000/teacher-key', requestKey)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));

    console.log("submit value", payload);
    setname("");
    setpictue("");
    setlocation("");
    settime("");
    setemail("");
    setlink("");
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
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>urlสำหรับรูปภาพ</label>
          <input
            className="admin-input-info-container"
            id="pictueture"
            type="text"
            value={pictue}
            onChange={(e) => setpictue(e.target.value)}
          />
          <label>ออฟฟิศประจำ</label>
          <input
            className="admin-input-info-container"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          <label>เวลาที่สามารถติดต่อได้</label>
          <input
            className="admin-input-info-container"
            id="time"
            type="text"
            value={time}
            onChange={(e) => settime(e.target.value)}
          />
          <label>ช่องทางการติดต่อ</label>
          <input
            className="admin-input-info-container"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>urlสำหรับข้อมูลเพิ่มเติม</label>
          <input
            className="admin-input-info-container"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setlink(e.target.value)}
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

export default CreateTeacher;
