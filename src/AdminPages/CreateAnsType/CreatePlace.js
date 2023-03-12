import React from "react";
import { useState } from 'react';

const CreatePlace = (props) => {
        const [room, setroom] = useState('');
        const [building, setbuilding] = useState('');
        const [floor, setfloor] = useState('');
        const [link_location, setlink_location] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setroom('')
                setbuilding('')
                setfloor('')
                setlink_location('')
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        building,
                        floor,
                        room,
                        link_location
                }

                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                };
                fetch('http://localhost:5000/place', requestOptions)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                const requestKey = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                                {
                                        key_1: room,
                                        key_2: "ห้อง"+room
                                })
                };
                fetch('http://localhost:5000/place-key', requestKey)
                        .then(response => response.json())
                        .then(data => this.setState({ postId: data.id }));

                console.log('submit value', payload)
                setroom('')
                setbuilding('')
                setfloor('')
                setlink_location('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form className="admin-create-ans-box-form-info-container">
                                        <label >ห้อง</label>
                                        <input className="admin-input-info-container" id="room" type="text"
                                                value={room}
                                                onChange={e => setroom(e.target.value)} />
                                        <label >ตึก(สถานที่)</label>
                                        <input className="admin-input-info-container" id="building" type="text"
                                                value={building}
                                                onChange={e => setbuilding(e.target.value)} />
                                        <label >ชั้น</label>
                                        <input className="admin-input-info-container" id="floor" type="text"
                                                value={floor}
                                                onChange={e => setfloor(e.target.value)} />
                                        <label >urlพิกัดตึก(สถานที่)</label>
                                        <input className="admin-input-info-container" id="link_location" type="text"
                                                value={link_location}
                                                onChange={e => setlink_location(e.target.value)} />
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