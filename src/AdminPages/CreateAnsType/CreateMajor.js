import React from "react";
import { useState } from 'react';

const CreateMajor = (props) => {
        const [CourseCode, setCourseCode] = useState('');
        const [Name, setName] = useState('');
        const [Term, setTerm] = useState('');
        const [Day, setDay] = useState('');
        const [Time, setTime] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setCourseCode('')
                setName('')
                setTerm('')
                setDay('')
                setTime('')
                props.trigger(false)
              }
              
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        CourseCode,
                        Name,
                        Term,
                        Day,
                        Time
                }

                console.log('submit value', payload)
                setCourseCode('')
                setName('')
                setTerm('')
                setDay('')
                setTime('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form className="admin-create-ans-box-form-info-container">
                                        <label >รหัสวิชา</label>
                                        <input className="admin-input-info-container" id="course_code" type="text"
                                                value={CourseCode}
                                                onChange={e => setCourseCode(e.target.value)} />
                                        <label >ชื่อวิชา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={Name}
                                                onChange={e => setName(e.target.value)} />
                                        <label >ภาคเรียนที่เปิดสอน</label>
                                        <input className="admin-input-info-container" id="term" type="text"
                                                value={Term}
                                                onChange={e => setTerm(e.target.value)} />
                                        <label >วันที่เรียน</label>
                                        <input className="admin-input-info-container" id="day" type="text"
                                                value={Day}
                                                onChange={e => setDay(e.target.value)} />
                                        <label >ช่วงเวลาที่เรียน</label>
                                        <input className="admin-input-info-container" id="time" type="text"
                                                value={Time}
                                                onChange={e => setTime(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => {props.trigger(false);onCancle(e);}}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>

                </div>

        );
};

export default CreateMajor;