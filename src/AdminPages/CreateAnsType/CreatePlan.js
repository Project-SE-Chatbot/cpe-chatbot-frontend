import React from "react";


const CreatePlan = (props) => {
    return (
            <form className="admin-create-ans-box-form-info-container">
                    <label >ระดับชั้นปริญญา</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >urlแผนการเรียน</label>
                    <input className="admin-input-info-container" id="Plan" type="password" />
            </form>

    );
};

export default CreatePlan;