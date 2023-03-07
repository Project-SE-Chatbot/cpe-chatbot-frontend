import React from "react";
import { useState } from 'react';
import close from "../../img/close (3).png";

const EditTeacher = (props) => {
    const [Name, setName] = useState('');
        const [Pic, setPic] = useState('');
        const [Place, setPlace] = useState('');
        const [Address, setAddress] = useState('');
        const [Time, setTime] = useState('');
        const onSubmit = e => {
            e.preventDefault()

            const payload = {
                    Name,
                    Pic,
                    Place,
                    Address,
                    Time
            }

            console.log('submit value', payload)
            setName('')
            setPic('')
            setPlace('')
            setAddress('')
            setTime('')
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
                    <label >ชื่อ-นามสกุล</label>
                    <input className="admin-input-info-container" id="name" type="text" onChange={e => setName(e.target.value)} />
                    <label >รูปภาพ</label>
                    <input className="admin-input-info-container" id="pic" type="file" onChange={e => setPic(e.target.value)} />
                    <label >สถานที่/ออฟฟิศประจำ</label>
                    <input className="admin-input-info-container" id="palce" type="text" onChange={e => setPlace(e.target.value)} />
                    <label >ช่องทางการติดต่อ</label>
                    <input className="admin-input-info-container" id="address" type="text" onChange={e => setAddress(e.target.value)} />
                    <label >ช่วงเวลาอยู่ออฟฟิศ</label>
                    <input className="admin-input-info-container" id="time" type="text" onChange={e => setTime(e.target.value)} />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => { props.trigger(false) }}>Cancle</div>
                <div className="admin-create-answer-done-button" onClick={onSubmit}>Save Changed</div>
            </div>
        </div>

    );
};

export default EditTeacher;