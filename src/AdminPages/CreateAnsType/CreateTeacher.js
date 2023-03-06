import React from "react";
import { useState } from 'react';

const CreateTeacher = (props) => {
        const [Name,setName] = useState('');
        const [Pic,setPic] = useState('');
        const [Place,setPlace] = useState('');
        const [Address,setAddress] = useState('');
        const [Time,setTime] = useState('');
        return (
                <div>
                        <form className="admin-create-ans-box-form-info-container">
                                <label >ชื่อ-นามสกุล</label>
                                <input className="admin-input-info-container" id="name" type="text" onChange={e => setName(e.target.value)}/>
                                <label >รูปภาพ</label>
                                <input className="admin-input-info-container" id="pic" type="file" onChange={e => setPic(e.target.value)}/>
                                <label >สถานที่/ออฟฟิศประจำ</label>
                                <input className="admin-input-info-container" id="palce" type="text" onChange={e => setPlace(e.target.value)}/>
                                <label >ช่องทางการติดต่อ</label>
                                <input className="admin-input-info-container" id="address" type="text" onChange={e => setAddress(e.target.value)}/>
                                <label >ช่วงเวลาอยู่ออฟฟิศ</label>
                                <input className="admin-input-info-container" id="time" type="text" onChange={e => setTime(e.target.value)}/>
                        </form>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button ">Cancle</div>
                                <div className="admin-create-answer-done-button">Done</div>
                        </div>
                </div>

        );
};

export default CreateTeacher;