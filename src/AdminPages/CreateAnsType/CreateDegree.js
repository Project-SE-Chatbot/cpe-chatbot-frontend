import React from "react";
import { useState } from 'react';

const CreateDegree = (props) => {
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
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
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
                                <div className="admin-create-answer-cancle-button " onClick={(e) => {props.trigger(false);onCancle(e);}}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreateDegree;