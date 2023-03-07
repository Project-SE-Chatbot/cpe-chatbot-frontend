import React from "react";
import { useState } from 'react';

const CreateDegree = (props) => {
        const [Name, setName] = useState('');
        const [Degree, setDegree] = useState('');
        const [Term, setTerm] = useState('');
        const [More, setMore] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setDegree('')
                setTerm('')
                setMore('')
        }
        const onSubmit = e => {
                e.preventDefault()
                const payload = {
                        Name,
                        Degree,
                        Term,
                        More
                }
                console.log('submit value', payload)
                setName('')
                setDegree('')
                setTerm('')
                setMore('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
                                        <label >ระดับชั้นปริญญา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={Name}
                                                onChange={e => setName(e.target.value)} />
                                        <label >ช่วงเวลาเปิดรับสมัคร</label>
                                        <input className="admin-input-info-container" id="Degree" type="text"
                                                value={Degree}
                                                onChange={e => setDegree(e.target.value)} />
                                        <label >จำนวนที่รับ</label>
                                        <input className="admin-input-info-container" id="term" type="text"
                                                value={Term}
                                                onChange={e => setTerm(e.target.value)} />
                                        <label >ข้อมูลเพิ่มเติม</label>
                                        <input className="admin-input-info-container" id="more" type="text"
                                                value={More}
                                                onChange={e => setMore(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={onCancle}>Cancle</div>
                                <div type="submit" className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreateDegree;