import React from "react";
import close from "../../img/close (3).png";

const EditDegree= (props) => {
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
                    <label >ระดับชั้นปริญญา</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >ช่วงเวลาเปิดรับสมัคร</label>
                    <input className="admin-input-info-container" id="Degree" type="password" />
                    <label >จำนวนที่รับ</label>
                    <input className="admin-input-info-container" id="term" type="text" />
                    <label >ข้อมูลเพิ่มเติม</label>
                    <input className="admin-input-info-container" id="place" type="password" />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button ">Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>
    );
};

export default EditDegree;