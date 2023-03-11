import React from "react";
import close from "../../img/close (3).png";
import { useState } from 'react';

const EditDegree = (props) => {
    const [Name, setName] = useState('');
    const [More, setMore] = useState('');
    const onCancle = e => {
        e.preventDefault()
        setName('')
        setMore('')
    }
    const onSubmit = e => {
        e.preventDefault()
        const payload = {
            Name,
            More
        }
        console.log('submit value', payload)
        setName('')
        setMore('')
    }
    return (
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => { props.trigger(false) }}>
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                <label >ระดับชั้นปริญญา</label>
                    <input className="admin-input-info-container" id="name" type="text"
                        value={Name}
                        onChange={e => setName(e.target.value)} />
                <label >urlสำหรับข้อมูลเพิ่มเติม</label>
                    <input className="admin-input-info-container" id="link" type="text"
                        value={More}
                        onChange={e => setMore(e.target.value)} />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => { props.trigger(false); onCancle() }} >Cancle</div>
                <div className="admin-create-answer-done-button" onClick={onSubmit}>Save Changed</div>
            </div>
        </div>
    );
};

export default EditDegree;