import React, { useEffect, useState } from "react";
import close from "../../img/close (3).png";

const EditFreeElective = (props) => {
    const [CourseCode, setCourseCode] = useState('');
    const [engName, setengName] = useState('');
    const [thaiName, setthaiName] = useState('');
    const [urlDesc, seturlDesc] = useState('');
    const [data, setData] = useState(null);

    var geturl = "http://localhost:5000/free-elective/" + props.courseID
    // var geturl = "10.10.182.145:5000/free-elective/" + props.courseID
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    var requestPut = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                course_code: CourseCode,
                name: engName,
                name_thai: thaiName,
                link_description: urlDesc
            })
      }

    const setValue = () => {
        setCourseCode(data.course_code)
        setengName(data.name)
        setthaiName(data.name_thai)
        seturlDesc(data.link_description)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(geturl)
            await fetch(geturl, requestOptions)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(e => console.log(e))
        }
        if (props.title === "Free elective") {
            fetchData()
        }

    }, [props.trigger])


    const fetchPutData = async () => {
        fetch(geturl, requestPut)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(e => console.log(e))
    }

    useEffect(() => {


    }, [])


    useEffect(() => {
        if (data) {
            setValue()
        }
    }, [data])

    return (
        <div className="admin-popup-edit-ans-box">
            {/* {console.log(data)}
            {console.log(props.title)}
            {console.log(props.courseID)} */}
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
                        value={CourseCode} readOnly
                        />
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
                <div className="admin-create-answer-done-button" onClick={() => { fetchPutData(); props.trigger(false); props.refresh()}}>Done</div>
            </div>
        </div>
    );
};

export default EditFreeElective;