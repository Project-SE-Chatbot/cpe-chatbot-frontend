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

const AdminPage = (props) => {
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [star, setStar] = useState();
  const [day, setDate] = useState();
  const [AnsEdit, setAnsEdit] = useState(false);

  const [showPopup, togglePopup] = useState(false);
  const [ansNum, setNum] = useState(0);

  const checkValue = () =>{
    console.log("title: " + title)
    console.log("detail: " + detail)
    console.log("star: " + star)
    console.log("date: " + day)
    console.log("AnsEdit: " + AnsEdit)
  }

  useEffect(()=>{

  },[AnsEdit])

  return(
    
    <div className="admin-background" >
      {/* {checkValue()} */}
      <Navbar />
      <div className="container">
        <div>
          {/* <AnsContainer /> */}
          {showPopup && <PopupCreAns togglePopup={togglePopup} />}
            <div className="admin-ans-box-container">
                <div className="admin-input-container">
                    <form>
                        <label>
                            <input className="admin-input-search-keyword"
                                type="text" name="name" placeholder="Search keywords" />
                        </label>
                    </form>
                    <button className="admin-add-create-ans-button"
                        onClick={() => togglePopup((prev) => !prev)} style={{cursor:'pointer'}}>
                        <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                    </button>
                </div>
                <div className="FoundAns">
                    <p>We found {ansNum} Answer</p>
                    <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
                </div>
                <AnswerBox setTitle={setTitle} setDetail={setDetail} setStar={setStar} setDate={setDate} editTrigger={setAnsEdit}/>
            </div>
        </div>
        <div className="edit">
          <AnswerEdit trigger={AnsEdit} title={title} detail={detail} star={star} date={day} />
          {/* {checkValue()} */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;