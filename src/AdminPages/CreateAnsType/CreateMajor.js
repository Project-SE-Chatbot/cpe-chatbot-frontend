import React from "react";
import { useState } from 'react';

const CreateMajor = (props) => {
        const [course_code, setcourse_code] = useState('');
        const [name, setname] = useState('');
        const [teacher, setteacher] = useState('');
        const [term, setterm] = useState('');
        const [place, setplace] = useState('');
        const [day, setday] = useState('');
        const [time, settime] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setcourse_code('')
                setname('')
                setterm('')
                setday('')
                settime('')
        }

        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        course_code,
                        name,
                        term,
                        day,
                        time
                }

                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                };
                fetch('http://localhost:5000/major', requestOptions)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                const requestKey = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                                { 
                                        key_1:course_code,
                                        key_2:name 
                                })
                };
                fetch('http://localhost:5000/major-key', requestKey)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                console.log('submit value', payload)
                setcourse_code('')
                setname('')
                setterm('')
                setday('')
                settime('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form className="admin-create-ans-box-form-info-container">
                                        <label >รหัสวิชา</label>
                                        <input className="admin-input-info-container" id="course_code" type="text"
                                                value={course_code}
                                                onChange={e => setcourse_code(e.target.value)} />
                                        <label >ชื่อวิชา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={name}
                                                onChange={e => setname(e.target.value)} />
                                        <label >ภาคเรียนที่เปิดสอน</label>
                                        <input className="admin-input-info-container" id="term" type="text"
                                                value={term}
                                                onChange={e => setterm(e.target.value)} />
                                        <label >วันที่เรียน</label>
                                        <input className="admin-input-info-container" id="day" type="text"
                                                value={day}
                                                onChange={e => setday(e.target.value)} />
                                        <label >ช่วงเวลาที่เรียน</label>
                                        <input className="admin-input-info-container" id="time" type="text"
                                                value={time}
                                                onChange={e => settime(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => { props.trigger(false); onCancle(e); }}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>

                </div>

        );
};

export default CreateMajor;