import React from "react";
import close from "../../img/close (3).png";

const EditMajor = (props) => {
    return (
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button">
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                    <label >วิชา</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >อาจารย์ผูสอน</label>
                    <input className="admin-input-info-container" id="teacher" type="password" />
                    <label >ภาคเรียนที่เปิดสอน</label>
                    <input className="admin-input-info-container" id="term" type="text" />
                    <label >สถานที่เรียน</label>
                    <input className="admin-input-info-container" id="place" type="password" />
                    <label >ช่วงเวลาที่เรียน</label>
                    <input className="admin-input-info-container" id="time" type="text" />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button ">Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>
    );
};

export default EditMajor;