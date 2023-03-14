import React, { useEffect, useState } from "react";
import AnsContainer from "./AnsContainer";
import ConfirmDelAns from "./ConfirmDelAns";
import AnswerEdit from "./component/AnswerEdit";
import Navbar from "./Navbar";
import PopupCreAns from "./PopupCreAns";
import EditDegree from "./PopupEditAns/EditDegree";
import EditFreeElective from "./PopupEditAns/EditFreeElective";
import EditMajor from "./PopupEditAns/EditMajor";
import EditPlace from "./PopupEditAns/EditPlace";
import EditRegister from "./PopupEditAns/EditRegister";
import EditTeacher from "./PopupEditAns/EditTeacher";
import AnswerBox from "./component/AnswerBox";


import plus from "../img/plus (1).png";
import './css/AnswerCon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { padding } from "@mui/system";

const AdminPage = (props) => {
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [star, setStar] = useState();
  const [day, setDate] = useState();
  const [AnsEdit, setAnsEdit] = useState(false);
  const [id, setID] = useState("")
  const [showPopup, togglePopup] = useState(false);

  const [keyNum, setKeyNum] = useState(0);

  const [type, settypeAns] = useState("Major")

  const handleTypeChange = (event) => {
    settypeAns(event.target.value)
  }

  const checkValue = () => {
    console.log("title: " + title)
    console.log("detail: " + detail)
    console.log("star: " + star)
    console.log("date: " + day)
    console.log("AnsEdit: " + AnsEdit)
  }

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  const urlMajor = "http://localhost:5000/major"
  const urlMajorElec = "http://localhost:5000/major-elective"
  const urlDegree = "http://localhost:5000/degree"
  const urlFreeElec = "http://localhost:5000/free-elective"
  const urlPlace = "http://localhost:5000/place"
  const urlRegister = "http://localhost:5000/register"
  const urlTeacher = "http://localhost:5000/teacher"

  const [AnsboxMajorList, setMajorList] = useState(null);
  const [AnsboxMajorElecList, setMajorElecList] = useState(null);
  const [AnsboxDegreeList, setDegreeList] = useState(null);
  const [AnsboxFreeElecList, setFreeElecList] = useState(null);
  const [AnsboxPlaceList, setPlaceList] = useState(null);
  const [AnsboxRegisterList, setRegisterList] = useState(null);
  const [AnsboxTeacherList, setTeacherList] = useState(null);

  const [dataMajor, setDataMajor] = useState(null);
  const [dataMajorElec, setDataMajorElec] = useState(null);
  const [dataDegree, setDataDegree] = useState(null);
  const [dataFreeElec, setDataFreeElec] = useState(null);
  const [dataPlace, setDataPlace] = useState(null);
  const [dataRegister, setDataRegister] = useState(null);
  const [dataTeacher, setDataTeacher] = useState(null);

  const [refresh, setRefresh] = useState(false)

  const handleRefresh = () => {
    setRefresh(!refresh)
  }

  useEffect(() => { }, [refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlMajor, requestOptions)
        .then(response => response.json())
        .then(result => { setMajorList(result); setDataMajor(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlMajor, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlMajorElec, requestOptions)
        .then(response => response.json())
        .then(result => { setMajorElecList(result); setDataMajorElec(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlMajorElec, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlDegree, requestOptions)
        .then(response => response.json())
        .then(result => { setDegreeList(result); setDataDegree(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlDegree, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlFreeElec, requestOptions)
        .then(response => response.json())
        .then(result => { setFreeElecList(result); setDataFreeElec(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlFreeElec, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlPlace, requestOptions)
        .then(response => response.json())
        .then(result => { setPlaceList(result); setDataPlace(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlPlace, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlRegister, requestOptions)
        .then(response => response.json())
        .then(result => { setRegisterList(result); setDataRegister(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlRegister, refresh])

  useEffect(() => {
    const fetchData = async () => {

      await fetch(urlTeacher, requestOptions)
        .then(response => response.json())
        .then(result => { setTeacherList(result); setDataTeacher(result) })
        .catch(e => console.log(e))
    }
    fetchData()
  }, [urlTeacher, refresh])

  let text = null

  
  let majorNum = 0
  let teacherNum = 0
  let placeNum = 0
  let majorElecNum = 0
  let freeElecNum = 0
  let DegreeNum = 0
  let registerNum = 0

  let showMajorAnsBox = null
  let showMajorElecAnsBox = null
  let showDegreeAnsBox = null
  let showFreeElecAnsBox = null
  let showPlaceAnsBox = null
  let showRegisterAnsBox = null
  let showTeacherAnsBox = null

  if (dataMajor) {
    showMajorAnsBox =
      AnsboxMajorList.map(element => {
        majorNum++
        text = "วิชา: " + element.name + " " + element.course_code + " "
          + "ภาคเรียนที่เปิดสอน: " + element.term + " "
          + "วัน: " + element.day + " " + element.time;

        return <AnswerBox key={element.id_major} course_id={element.course_code} title={"Major"} star={3} detail={text} date={"Yesterday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataMajorElec) {
    showMajorElecAnsBox =
      AnsboxMajorElecList.map(element => {
        majorElecNum++
        text = "วิชา: " + element.name + " " + element.course_code + " "
          + "Description and review: " + element.link_description;

        return <AnswerBox key={element.id_major_elective} course_id={element.course_code} title={"Major Elective"} star={5} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataDegree) {
    showDegreeAnsBox =
      AnsboxDegreeList.map(element => {
        DegreeNum++
        text = element.name + " " + "Description:" + element.link;

        return <AnswerBox key={element.id_degree} course_id={element.name} title={"Degree"} star={5} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataFreeElec) {
    showFreeElecAnsBox =
      AnsboxFreeElecList.map(element => {
        freeElecNum++
        text = "วิชา:" + element.name + " " + element.name_thai + " " + element.course_code + "Description:" + element.link_description;
        return <AnswerBox key={element.id_free_elective} course_id={element.course_code} title={"Free elective"} star={5} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataPlace) {
    showPlaceAnsBox =
      AnsboxPlaceList.map(element => {
        placeNum++
        text = "Room: " + element.room + " Buildiing: " + element.building + " Floor: " + element.floor + " Link locattion: " + element.link_location;

        return <AnswerBox key={element.id_place} course_id={element.room} title={"Place"} star={1} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataRegister) {
    showRegisterAnsBox =
      AnsboxRegisterList.map(element => {
        registerNum++
        text = element.name + " Link: " + element.link;

        return <AnswerBox key={element.id_register} course_id={element.name} title={"Register"} star={1} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  if (dataTeacher) {
    showTeacherAnsBox =
      AnsboxTeacherList.map(element => {
        teacherNum++
        text = "ชื่อ: " + element.name + " Office: " + element.location + " Contact: " + element.email + " Image: " + element.picture + " More Info: " + element.link;

        return <AnswerBox key={element.id_teacher} course_id={element.name} title={"Teacher"} star={1} detail={text} date={"Last Monday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit} />
      }
      )
  }

  let ansNum = majorNum + teacherNum + placeNum + DegreeNum + registerNum + freeElecNum+ majorElecNum


  return (
    <div className="admin-background" >
      {/* {checkValue()} */}
      {/* {console.log(AnsboxMajorList)} */}
      <Navbar />
      <div className="container">
        <div>
          {/* <AnsContainer /> */}
          <PopupCreAns trigger={showPopup} togglePopup={togglePopup} refresh={handleRefresh}/>
          <div className="admin-ans-box-container">
            <div className="admin-input-container">
              <form>
                <select className="admin-input-search-keyword" value={type} onChange={handleTypeChange}>
                <option value="empty">choose type of answer</option>
                  <option value="major">Major</option>
                  <option value="majorelective">Major Elective</option>
                  <option value="freeelective">Free Elective</option>
                  <option value="degree">Degree</option>
                  <option value="place">Place</option>
                  <option value="register">Register</option>
                  <option value="teacher">Teacher</option>
                </select>
              </form>
              <button className="admin-add-create-ans-button"
                onClick={() => togglePopup((prev) => !prev)} style={{ cursor: 'pointer' }}>
                <img src={plus} style={{ width: "35px", height: "35px" }}></img>
              </button>
            </div>
            <div className="FoundAns">
              {type === "teacher"
                ? <p>We found {teacherNum} Answer</p>
                : type === "freeelective"
                  ? <p>We found {freeElecNum} Answer</p>
                  : type === "place"
                    ? <p>We found {placeNum} Answer</p>
                    : type === "degree"
                      ? <p>We found {DegreeNum} Answer</p>
                      : type === "register"
                        ? <p>We found {registerNum} Answer</p>
                        : type === "major"
                          ? <p>We found {majorNum} Answer</p>
                          : type === "majorelective"
                            ? <p>We found {majorElecNum} Answer</p>
                             : <p>We found {ansNum} Answer</p>
              }
              <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
            </div>
            <div className="admin-ans-list">
              {type === "teacher"
                ? dataTeacher && showTeacherAnsBox
                : type === "freeelective"
                  ? dataFreeElec && showFreeElecAnsBox
                  : type === "place"
                    ? dataPlace && showPlaceAnsBox
                    : type === "degree"
                      ? dataDegree && showDegreeAnsBox
                      : type === "register"
                        ? dataRegister && showRegisterAnsBox
                        : type === "major"
                          ? dataMajor && showMajorAnsBox
                          : type === "majorelective"
                            ? dataMajorElec && showMajorElecAnsBox
                             : ""
                              

              }
            </div>
          </div>
        </div>
        <div className="edit">
          <AnswerEdit trigger={AnsEdit} id={id} title={title} detail={detail} star={star} date={day} refresh={handleRefresh} editTrigger={setAnsEdit}/>
          {/* {checkValue()} */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;