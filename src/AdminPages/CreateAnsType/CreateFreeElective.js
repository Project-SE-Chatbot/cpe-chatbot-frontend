import React from "react";
import { useState } from 'react';

const CreateFreeElective = (props) => {
        const [CourseCode, setCourseCode] = useState('');
        const [engName, setengName] = useState('');
        const [thaiName, setthaiName] = useState('');
        const [urlDesc, seturlDesc] = useState('');
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
                        CourseCode,
                        engName,
                        thaiName,
                        urlDesc
                }

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
                                                value={CourseCode}
                                                onChange={e => setCourseCode(e.target.value)} />
                                        <label >ชื่อวิชา(อังกฤษ)</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={engName}
                                                onChange={e => setengName(e.target.value)} />
                                        <label >ชื่อวิชา(ไทย)</label>
                                        <input className="admin-input-info-container" id="name_thai" type="text"
                                                value={thaiName}
                                                onChange={e => setthaiName(e.target.value)} />
                                        <label >urlสำหรับdescription</label>
                                        <input className="admin-input-info-container" id="link_description" type="text"
                                                value={urlDesc}
                                                onChange={e => seturlDesc(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => {props.trigger(false);onCancle(e);}}>Cancle</div>
                                <div type="submit" className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreateFreeElective;