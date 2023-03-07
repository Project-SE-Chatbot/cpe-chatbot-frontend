import React from "react";
import { useState } from 'react';

const CreateFreeElective = (props) => {
        const [Name, setName] = useState('');
        const [Review, setReview] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setReview('')
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Name,
                        Review
                }

                console.log('submit value', payload)
                setName('')
                setReview('')
        }
        return (
                <div>
                        <div className="admin-create-ans-box-info-container">
                                <form onSubmit={onSubmit} className="admin-create-ans-box-form-info-container">
                                        <label >วิชา</label>
                                        <input className="admin-input-info-container" id="name" type="text"
                                                value={Name}
                                                onChange={e => setName(e.target.value)} />
                                        <label >รีวิว</label>
                                        <input className="admin-input-info-container" id="FreeElective" type="text"
                                                value={Review}
                                                onChange={e => setReview(e.target.value)} />
                                </form>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={onCancle}>Cancle</div>
                                <div type="submit" className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreateFreeElective;