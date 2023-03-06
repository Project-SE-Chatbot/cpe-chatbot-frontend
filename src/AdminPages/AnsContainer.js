import React, { useState } from "react";
import plus from "../img/plus (1).png";
<<<<<<< HEAD
import { useState } from "react";
import PopupCreAns from "./PopupCreAns";

const AnsContainer = (props) => {
    const [showPopup, togglePopup] = useState(false);
    return (
        <div>
=======
import AnswerBox from "./component/AnswerBox";
import './css/AnswerCon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import AnswerEdit from "./component/AnswerEdit";

const AnsContainer = (props) => {
    const [ansNum, setNum] = useState(0);
    return (
>>>>>>> 38ad81a84a04cbbd737d2f939fac8b9d8541085e
            <div className="admin-ans-box-container">
                <div className="admin-input-container">
                    <form>
                        <label>
                            <input className="admin-input-search-keyword"
                                type="text" name="name" placeholder="Search keywords" />
                        </label>
                    </form>
<<<<<<< HEAD
                    <button className="admin-add-create-ans-button"
                            onClick={() => togglePopup((prev) => !prev)}>
                        <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                    </button>
                </div>
            </div>
            {showPopup && <PopupCreAns/>}
        </div>
=======
                    <button className="admin-add-create-ans-button">
                        <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                    </button>
                </div>
                <div className="FoundAns">
                    <p>We found {ansNum} Answer</p>
                    <FontAwesomeIcon icon={faChevronDown} style={{cursor: 'pointer'}}/>
                </div>
                <AnswerBox></AnswerBox>
            </div>
>>>>>>> 38ad81a84a04cbbd737d2f939fac8b9d8541085e
    );
};

export default AnsContainer;