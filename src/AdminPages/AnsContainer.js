import React, { useState } from "react";
import plus from "../img/plus (1).png";
import AnswerBox from "./component/AnswerBox";
import './css/AnswerCon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"

const AnsContainer = (props) => {
    const [ansNum, setNum] = useState(0);
    return (
        <div className="admin-ans-box-container">
            <div className="admin-input-container">
                <form>
                    <label>
                        <input className="admin-input-search-keyword"
                            type="text" name="name" placeholder="Search keywords" />
                    </label>
                </form>
                <button className="admin-add-create-ans-button">
                    <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                </button>
            </div>
            <div className="FoundAns">
                <p>We found {ansNum} Answer</p> 
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <AnswerBox></AnswerBox>
        </div>
    );
};

export default AnsContainer;