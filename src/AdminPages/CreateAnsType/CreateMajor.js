import React from "react";
import { useState } from 'react';

const CreateMajor = (props) => {
        const [Name, setName] = useState('');
        const [Teacher, setTeacher] = useState('');
        const [Term, setTerm] = useState('');
        const [Place, setPlace] = useState('');
        const [Time, setTime] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setTeacher('')
                setTerm('')
                setPlace('')
                setTime('')
<<<<<<< HEAD
        }
=======
                props.trigger(false)
              }
              
>>>>>>> 8a151ece2da677070ab711a537c99f0ad46c09be
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Name,
                        Teacher,
                        Term,
                        Place,
                        Time
                }

                console.log('submit value', payload)
                setName('')
                setTeacher('')
                setTerm('')
                setPlace('')
                setTime('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form className="admin-create-ans-box-form-info-container">
                                        <label style={{fontSize:"16px"}}>วิชา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={Name}
                                                onChange={e => setName(e.target.value)} />
                                        <label >อาจารย์ผูสอน</label>
                                        <input className="admin-input-info-container" id="teacher" type="text"
                                                value={Teacher}
                                                onChange={e => setTeacher(e.target.value)} />
                                        <label >ภาคเรียนที่เปิดสอน</label>
                                        <input className="admin-input-info-container" id="term" type="text"
                                                value={Term}
                                                onChange={e => setTerm(e.target.value)} />
                                        <label >สถานที่เรียน</label>
                                        <input className="admin-input-info-container" id="place" type="text"
                                                value={Place}
                                                onChange={e => setPlace(e.target.value)} />
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