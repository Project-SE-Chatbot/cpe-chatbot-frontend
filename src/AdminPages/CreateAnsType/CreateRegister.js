import React from "react";
import { useState } from "react";

const CreateRegister = (props) => {
  const [name, setname] = useState("");
  const [link, setlink] = useState("");
  const [tcas_round, settcas_round] = useState("");
  const [degree, setdegree] = useState("4");
  const onCancle = (e) => {
    e.preventDefault();
    setname("");
    setlink("");
    settcas_round("");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name:name,
      link:link,
      tcas_round:tcas_round,
      degree:degree

    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    fetch('http://localhost:5000/register', requestOptions)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));

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
    fetch('http://localhost:5000/register-key', requestKey)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));

    console.log("submit value", payload);
    setname("");
    setlink("");
    settcas_round("");
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
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>linkสำหรับข้อมูลเพิ่มเติม</label>
          <input
            className="admin-input-info-container"
            id="link"
            type="text"
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
          <label>รอบTCAS</label>
          <input
            className="admin-input-info-container"
            id="tacs_round"
            type="text"
            value={tcas_round}
            onChange={(e) => settcas_round(e.target.value)}
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
        <div className="admin-create-answer-done-button" onClick={(e)=>{ onSubmit(e); props.refresh(); }}>
          Done
        </div>
      </div>
    </div>
  );
};

export default CreateRegister;
