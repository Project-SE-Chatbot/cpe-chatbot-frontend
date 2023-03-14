import React from "react";
import { useState } from 'react';

const CreateMajorElective = (props) => {
        const [course_code, setcourse_code] = useState('');
        const [name, setname] = useState('');
        const [link_description, setlink_description] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setcourse_code('')
                setname('')
                setlink_description('')
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        course_code,
                        name,
                        link_description
                }
                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                };
                fetch('http://localhost:5000/major-elective', requestOptions)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                const requestKey = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                                {
                                        key_1: course_code,
                                        key_2: name,
                                        key_3:"",
                                        key_4:"",
                                        key_5:"",
                                        key_6:""
                                })
                };
                fetch('http://localhost:5000/major-elec-key', requestKey)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                console.log('submit value', payload)
                setcourse_code('')
                setname('')
                setlink_description('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
                                        <label >รหัสวิชา</label>
                                        <input className="admin-input-info-container" id="course_code" type="text"
                                                value={course_code}
                                                onChange={e => setcourse_code(e.target.value)} />
                                        <label >ชื่อวิชา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={name}
                                                onChange={e => setname(e.target.value)} />
                                        <label >urlสำหรับdescription</label>
                                        <input className="admin-input-info-container" id="link_description" type="text"
                                                value={link_description}
                                                onChange={e => setlink_description(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => { props.trigger(false); onCancle(e); }}>Cancle</div>
                                <div type="submit" className="admin-create-answer-done-button" onClick={(e)=>{ onSubmit(e); props.refresh(); }}>Done</div>
                        </div>
                </div>

        );
};

export default CreateMajorElective;