import React, { useState } from "react";
import plus from "../img/plus (1).png";
import PopupCreAns from "./PopupCreAns";
import AnswerBox from "./component/AnswerBox";
import './css/AnswerCon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import AnswerEdit from "./component/AnswerEdit";

const AnsContainer = (props) => {
    const [ansNum, setNum] = useState(0);
    const [creAnspop,setAnspop] = useState(false) ;
    return (
        <div>
            <PopupCreAns trigger = {creAnspop} setTrigger = {setAnspop} />
            <div className="admin-ans-box-container">
                <div className="admin-input-container">
                    <form>
                        <label>
                            <input className="admin-input-search-keyword"
                                type="text" name="name" placeholder="Search keywords" />
                        </label>
                    </form>
                    <button className="admin-add-create-ans-button"
                        onClick={() => setAnspop(true)} style={{cursor:'pointer'}}>
                        <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                    </button>
                </div>
                <div className="FoundAns">
                    <p>We found {ansNum} Answer</p>
                    <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
                </div>
                <AnswerBox />
            </div>
        </div>
    );
};

export default AnsContainer;