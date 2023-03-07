import React from "react";
import close from "../../img/close (3).png";

const EditPlan= (props) => {
    return (
        <div>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                    <label >ระดับชั้นปริญญา</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >urlแผนการเรียน</label>
                    <input className="admin-input-info-container" id="Plan" type="password" />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button ">Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>
    );
};

export default EditPlan;