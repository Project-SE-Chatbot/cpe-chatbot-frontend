import React from "react";


const CreateMajor = (props) => {
    return (
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

    );
};

export default CreateMajor;