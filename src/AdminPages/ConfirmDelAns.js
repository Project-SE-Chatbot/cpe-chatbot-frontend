import React from "react";
import close from "../img/close (3).png";

const ConfirmDelAns = (props) => {
    return (
        <div className="admin-confirm-delete-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button">
                <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <p style={{fontSize:"20px",fontWeight:"600"}}>Are you sure delete this question?</p>
            <p style={{fontSize:"12px",fontWeight:"400",color:"#5B5B5B"}}>If you delete the question you can’t recover it.</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button ">Cancle</div>
                <div className="admin-create-answer-delete-button">Delete</div>
            </div>
        </div>
    );
};

export default ConfirmDelAns;