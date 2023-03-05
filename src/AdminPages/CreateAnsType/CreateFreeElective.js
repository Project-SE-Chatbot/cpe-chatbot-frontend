import React from "react";


const CreateFreeElective = (props) => {
    return (
            <form className="admin-create-ans-box-form-info-container">
                    <label >วิชา</label>
                    <input className="admin-input-info-container" id="name" type="text" />
                    <label >รีวิว</label>
                    <input className="admin-input-info-container" id="FreeElective" type="password" />
            </form>

    );
};

export default CreateFreeElective;