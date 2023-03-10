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
import EditPlan from "./PopupEditAns/EditPlan";
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
  const [id,setID] = useState("")
  const [showPopup, togglePopup] = useState(false);
  
  const [keyNum,setKeyNum] = useState(0);
  
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




  const [AnsboxList, setList] = useState(null);
  const url = "http://localhost:5000/major"
  const [loading , setLoading] = useState(false)
  const [data,setData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      
      await fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {setList(result);setData(result)})
        
        .catch(e => console.log(e))
    }
    fetchData()
  }, [url])




  let text = null
  let showMajorAnsBox = null
  let ansNum = 0
  if(data){
    showMajorAnsBox = 
      AnsboxList.map(element => {
        ansNum++
        text = "วิชา: " + element.name + " " + element.course_code + " "
          // + "ผู้สอน: " + element.teacher == null ? "ไม่มี":element.map(element => element.name) + " "
          + "ภาคเรียนที่เปิดสอน: " + element.term + " "
          // + "Location: " + element.place == null? "ไม่มี":element.place.building + " " 
          // + "Room " + element.place == null? "ไม่มี":element.place.room + " "
          + "วัน: " + element.day + " " + element.time;

        return <AnswerBox key={element.id_major} course_id={element.course_code} title={"Major"} star={3} detail={text} date={"Yesterday"} setID={setID} setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit}/>
      }
      )
  }
  
  return (
    <div className="admin-background" >
      {/* {checkValue()} */}
      {console.log(AnsboxList)}
      <Navbar />
      <div className="container">
        <div>
          {/* <AnsContainer /> */}
          <PopupCreAns trigger={showPopup} togglePopup={togglePopup} />
          <div className="admin-ans-box-container">
            <div className="admin-input-container">
              <form>
                <label>
                  <input className="admin-input-search-keyword"
                    type="text" name="name" placeholder="Search keywords" />
                </label>
              </form>
              <button className="admin-add-create-ans-button"
                onClick={() => togglePopup((prev) => !prev)} style={{ cursor: 'pointer' }}>
                <img src={plus} style={{ width: "35px", height: "35px" }}></img>
              </button>
            </div>
            <div className="FoundAns">
              <p>We found {ansNum} Answer</p>
              <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
            </div>
            <div className="admin-ans-list">
              {
                data && showMajorAnsBox
              }
            </div>
          </div>
        </div>
        <div className="edit">
          <AnswerEdit trigger={AnsEdit} id={id} title={title} detail={detail} star={star} date={day} />
          {/* {checkValue()} */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;