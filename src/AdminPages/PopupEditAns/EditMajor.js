import React,{ useState } from "react";
import close from "../../img/close (3).png";

const EditMajor = (props) => {
    const [Name,setName] = useState('');
        const [Teacher,setTeacher] = useState('');
        const [Term,setTerm] = useState('');
        const [Place,setPlace] = useState('');
        const [Time,setTime] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setTeacher('')
                setTerm('')
                setPlace('')
                setTime('')
              }
        const onSubmit = e => {
                e.preventDefault()
              
                const payload = {
                  Name,
                  Teacher,
                  Term,
                  Place,
                  Time
                }
              
                console.log('submit value', payload)
                setName('')
                setTeacher('')
                setTerm('')
                setPlace('')
                setTime('')
              }
    return (
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => {props.trigger(false)}}>
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                <label >วิชา</label>
                                <input className="admin-input-info-container" id="name" type="text" 
                                value={Name}
                                onChange={e => setName(e.target.value)}/>
                                <label >อาจารย์ผูสอน</label>
                                <input className="admin-input-info-container" id="teacher" type="text" 
                                value={Teacher}
                                onChange={e => setTeacher(e.target.value)}/>
                                <label >ภาคเรียนที่เปิดสอน</label>
                                <input className="admin-input-info-container" id="term" type="text" 
                                value={Term}
                                onChange={e => setTerm(e.target.value)}/>
                                <label >สถานที่เรียน</label>
                                <input className="admin-input-info-container" id="place" type="text" 
                                value={Place}
                                onChange={e => setPlace(e.target.value)}/>
                                <label >ช่วงเวลาที่เรียน</label>
                                <input className="admin-input-info-container" id="time" type="text" 
                                value={Time}
                                onChange={e => setTime(e.target.value)}/>
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => {props.trigger(false)}}>Cancle</div>
                <div className="admin-create-answer-done-button">Save Changed</div>
            </div>
        </div>
    );
};

export default EditMajor;