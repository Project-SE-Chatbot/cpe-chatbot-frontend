import React from "react";
import { useState } from 'react';

const CreateDegree = (props) => {
        const [name, setname] = useState('');
        const [link, setlink] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setname('')
                setlink('')
        }
        const onSubmit = e => {
                e.preventDefault()
                const payload = {
                        name,
                        link
                }
                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                };
                // url = http://localhost:5000
                fetch('http://localhost:5000/degree', requestOptions)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                const requestKey = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                                {
                                        key_1:name,
                                        key_2:"",
                                        key_3:"",
                                        key_4:"",
                                        key_5:"",
                                        key_6:""
                                })
                };
                fetch('http://localhost:5000/degree-key', requestKey)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));


                console.log('submit value', payload)
                setname('')
                setlink('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
                                        <label >ระดับชั้นปริญญา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={name}
                                                onChange={e => setname(e.target.value)} />
                                        <label >urlสำหรับข้อมูลเพิ่มเติม</label>
                                        <input className="admin-input-info-container" id="link" type="text"
                                                value={link}
                                                onChange={e => setlink(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => { props.trigger(false); onCancle(e); }}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={(e)=>{ onSubmit(e); props.refresh(); }}>Done</div>
                        </div>
                </div>

        );
};

export default CreateDegree;