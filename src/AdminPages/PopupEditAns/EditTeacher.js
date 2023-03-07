import React from "react";
import close from "../../img/close (3).png";

const EditTeacher = (props) => {
    return (
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => {props.trigger(false)}}> 
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                    <label >ชื่อ-นามสกุล</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >รูปภาพ</label>
                    <input className="admin-input-info-container" id="teacher" type="file" />
                    <label >สถานที่/ออฟฟิศประจำ</label>
                    <input className="admin-input-info-container" id="term" type="text" />
                    <label >ช่องทางการติดต่อ</label>
                    <input className="admin-input-info-container" id="place" type="password" />
                    <label >ช่วงเวลาอยู่ออฟฟิศ</label>
                    <input className="admin-input-info-container" id="time" type="text" />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => {props.trigger(false)}}>Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>

    );
};

export default EditTeacher;