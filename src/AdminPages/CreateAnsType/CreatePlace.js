import React from "react";
import { useState } from 'react';

const CreatePlace = (props) => {
        const [Room, setRoom] = useState('');
        const [Building, setBuilding] = useState('');
        const [Floor, setFloor] = useState('');
        const [urlLocation, seturlLocation] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setRoom('')
                setBuilding('')
                setFloor('')
                seturlLocation('')
                props.trigger(false)
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Room,
                        Building,
                        Floor,
                        urlLocation
                }

                console.log('submit value', payload)
                setRoom('')
                setBuilding('')
                setFloor('')
                seturlLocation('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form className="admin-create-ans-box-form-info-container">
                                        <label >ห้อง</label>
                                        <input className="admin-input-info-container" id="room" type="text"
                                                value={Room}
                                                onChange={e => setRoom(e.target.value)} />
                                        <label >ตึก(สถานที่)</label>
                                        <input className="admin-input-info-container" id="building" type="text"
                                                value={Building}
                                                onChange={e => setBuilding(e.target.value)} />
                                        <label >ชั้น</label>
                                        <input className="admin-input-info-container" id="floor" type="text"
                                                value={Floor}
                                                onChange={e => setFloor(e.target.value)} />
                                        <label >urlพิกัดตึก(สถานที่)</label>
                                        <input className="admin-input-info-container" id="link_location" type="text"
                                                value={urlLocation}
                                                onChange={e => seturlLocation(e.target.value)} />
                                </form>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => { props.trigger(false); onCancle(e); }}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>
        );
};

export default CreatePlace;