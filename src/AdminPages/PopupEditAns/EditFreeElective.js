import React,{useState} from "react";
import close from "../../img/close (3).png";

const EditFreeElective = (props) => {
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
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => { props.trigger(false) }}>
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
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
                <div className="admin-create-answer-cancle-button " onClick={() => { props.trigger(false) }}>Cancle</div>
                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
            </div>
        </div>
    );
};

export default EditFreeElective;