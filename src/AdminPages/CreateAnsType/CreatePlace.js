import React from "react";
import { useState } from 'react';

const CreatePlace = (props) => {
        const [Name,setName] = useState('');
        const [Room,setRoom] = useState('');
        const [Loc,setLoc] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setRoom('')
                setLoc('')
              }
        const onSubmit = e => {
                e.preventDefault()
              
                const payload = {
                  Name,
                  Room,
                  Loc,
                }
              
                console.log('submit value', payload)
                setName('')
                setRoom('')
                setLoc('')
              }
        return (
                <div>
                        <form className="admin-create-ans-box-form-info-container">
                                <label >ตึก</label>
                                <input className="admin-input-info-container" id="name" type="text" 
                                value={Name}
                                onChange={e => setName(e.target.value)}/>
                                <label >ห้อง</label>
                                <input className="admin-input-info-container" id="room" type="text" 
                                value={Room}
                                onChange={e => setRoom(e.target.value)}/>
                                <label >พิกัดสถานที่</label>
                                <input className="admin-input-info-container" id="location" type="text" 
                                value={Loc}
                                onChange={e => setLoc(e.target.value)}/>
                        </form>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className="admin-create-answer-cancle-button " onClick={onCancle}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreatePlace;