import React, { useEffect, useState } from "react";
import close from "../../img/close (3).png";

const EditMajor = (props) => {
  const [CourseCode, setCourseCode] = useState("");
  const [Name, setName] = useState("");
  const [Term, setTerm] = useState("");
  const [Day, setDay] = useState("");
  const [Time, setTime] = useState("");

  const [data,setData] = useState(null);

  var geturl = "http://localhost:5000/major/" + props.courseID
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  var requestPut = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            course_code: CourseCode,
            name : Name,
            term: Term,
            day: Day,
            time: Time
        })
  }

  const setValue= () => {
      setCourseCode(data.course_code)
      setName(data.name)
      setTerm(data.term)
      setDay(data.day)
      setTime(data.time)
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log(geturl)
      await fetch(geturl, requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(e => console.log(e))
    }
    if(props.title === "Major"){
      fetchData()
    }
    
  }, [props.trigger])

  
  const fetchPutData = async () => {
      fetch(geturl, requestPut)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }

  useEffect(()=>{
        
        
  },[])
  

  useEffect(()=>{
    if(data){
      setValue()
    }
  },[data])


  return (
    <div className="admin-popup-edit-ans-box">
      {/* {console.log(data)}
      {console.log(props.title)}
      {console.log(props.courseID)} */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="admin-button"
          onClick={() => {
            props.trigger(false);
          }}
        >
          <img src={close} style={{ width: "15px", height: "15px" }}></img>
        </button>
      </div>
      <h2>Edit answer</h2>
      <div className="admin-create-ans-box-info-container">
        <form className="admin-create-ans-box-form-info-container">
          <label>รหัสวิชา</label>
          <input
            className="admin-input-info-container"
            id="course_code"
            type="text"
            value={CourseCode} readOnly
            
          />
          <label>ชื่อวิชา</label>
          <input
            className="admin-input-info-container"
            id="name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>ภาคเรียนที่เปิดสอน</label>
          <input
            className="admin-input-info-container"
            id="term"
            type="text"
            
            value={Term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <label>วันที่เรียน</label>
          <input
            className="admin-input-info-container"
            id="day"
            type="text"
            value={Day}
            onChange={(e) => setDay(e.target.value)}
          />
          <label>ช่วงเวลาที่เรียน</label>
          <input
            className="admin-input-info-container"
            id="time"
            type="text"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="admin-create-answer-cancle-button "
          onClick={() => {
            props.trigger(false);
          }}
        >
          Cancle
        </div>
        <div className="admin-create-answer-done-button" onClick={()=>{fetchPutData(); props.refresh();props.trigger(false);}}>
          Done
        </div>
      </div>
    </div>
  );
};

export default EditMajor;
