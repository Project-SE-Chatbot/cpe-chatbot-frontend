import React from "react";
import { useState } from 'react';

const CreateFreeElective = (props) => {
        const [course_code, setCourseCode] = useState('');
        const [name, setengName] = useState('');
        const [name_thai, setthaiName] = useState('');
        const [link_description, seturlDesc] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setCourseCode('')
                setengName('')
                setthaiName('')
                seturlDesc('')
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        course_code,
                        name,
                        name_thai,
                        link_description
                }
                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                };
                fetch('10.10.182.145:5000/free-elective', requestOptions)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                const requestKey = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                                {
                                        key_1:course_code,
                                        key_2:name,
                                        key_3:name_thai,
                                        key_4:"",
                                        key_5:"",
                                        key_6:""
                                })
                };
                fetch('10.10.182.145:5000/free-elec-key', requestKey)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));



                console.log('submit value', payload)
                setCourseCode('')
                setengName('')
                setthaiName('')
                seturlDesc('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
                                        <label >รหัสวิชา</label>
                                        <input className="admin-input-info-container" id="course_code" type="text"
                                                value={course_code}
                                                onChange={e => setCourseCode(e.target.value)} />
                                        <label >ชื่อวิชา(อังกฤษ)</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={name}
                                                onChange={e => setengName(e.target.value)} />
                                        <label >ชื่อวิชา(ไทย)</label>
                                        <input className="admin-input-info-container" id="name_thai" type="text"
                                                value={name_thai}
                                                onChange={e => setthaiName(e.target.value)} />
                                        <label >urlสำหรับdescription</label>
                                        <input className="admin-input-info-container" id="link_description" type="text"
                                                value={link_description}
                                                onChange={e => seturlDesc(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => { props.trigger(false); onCancle(e); }}>Cancle</div>
                                <div type="submit" className="admin-create-answer-done-button" onClick={(e)=>{ onSubmit(e); props.refresh(); }}>Done</div>
                        </div>
                </div>

        );
};

export default CreateFreeElective;