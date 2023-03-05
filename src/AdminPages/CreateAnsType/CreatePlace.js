import React from "react";


const CreatePlace= (props) => {
    return (
            <form className="admin-create-ans-box-form-info-container">
                    <label >ตึก</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >ห้อง</label>
                    <input className="admin-input-info-container" id="Place" type="password" />
                    <label >พิกัดสถานที่</label>
                    <input className="admin-input-info-container" id="term" type="text" />
            </form>

    );
};

export default CreatePlace;