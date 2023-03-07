import React from "react";
import { useState } from 'react';

const CreatePlan = (props) => {
        const [Name, setName] = useState('');
        const [Plan, setPlan] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setPlan('')
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Name,
                        Plan
                }

                console.log('submit value', payload)
                setName('')
                setPlan('')
        }
        return (
                <div>
                        <form className="admin-create-ans-box-form-info-container">
                                <label >ระดับชั้นปริญญา</label>
                                <input className="admin-input-info-container" id="name" type="text" 
                                value={Name}
                                onChange={e => setName(e.target.value)}/>
                                <label >urlแผนการเรียน</label>
                                <input className="admin-input-info-container" id="Plan" type="text" 
                                value={Plan}
                                onChange={e => setPlan(e.target.value)}/>
                        </form>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="admin-create-answer-cancle-button " onClick={(e) => {props.trigger(false);onCancle(e);}}>Cancle</div>
                                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
                        </div>
                </div>

        );
};

export default CreatePlan;