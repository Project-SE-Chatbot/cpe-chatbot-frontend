import React from "react";


const InputInfo = (props) => {
    return (
        <div className="admin-create-ans-box-info-container">
            <form className="admin-create-ans-box-form-info-container">
                    <label >ชื่อ-นามสกุล</label>
                    <input className="admin-input-info-container"  id="name" type="text" />
                    <label >รูปภาพ</label>
                    <input className="admin-input-info-container"  id="pic" type="password"  />
                    <label >สถานที่/ออฟฟิศประจำ</label>
                    <input className="admin-input-info-container"  id="name" type="text" />
                    <label >ช่องทางการติดต่อ</label>
                    <input className="admin-input-info-container"  id="pic" type="password"  />
                    <label >ช่วงเวลาอยู่ออฟฟิศ</label>
                    <input className="admin-input-info-container"  id="name" type="text" />
            </form>
        </div>

    );
};

export default InputInfo;