import React from "react";
import close from "../../img/close (3).png";

const EditPlace= (props) => {
    return (
        <div >
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                    <label >ตึก</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >ห้อง</label>
                    <input className="admin-input-info-container" id="Place" type="password" />
                    <label >พิกัดสถานที่</label>
                    <input className="admin-input-info-container" id="term" type="text" />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button ">Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>
    );
};

export default EditPlace;