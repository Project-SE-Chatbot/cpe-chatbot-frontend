import React from "react";


const CreateDegree = (props) => {
    return (
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

    );
};

export default CreateDegree;