import React from "react";


const CreateTeacher = (props) => {
    return (
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

    );
};

export default CreateTeacher;