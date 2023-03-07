import React from "react";
import close from "../img/close (3).png";
import InputInfo from "./inputInfo";
import { useState } from 'react';
import CreateTeacher from "./CreateAnsType/CreateTeacher";
import CreateFreeElective from "./CreateAnsType/CreateFreeElective";
import CreatePlace from "./CreateAnsType/CreatePlace";
import CreatePlan from "./CreateAnsType/CreatePlan";
import CreateDegree from "./CreateAnsType/CreateDegree";
import CreateMajor from "./CreateAnsType/CreateMajor";

const PopupCreAns = (props) => {
    const [type, setType] = useState("teacher");
    const handleClick = (e) => {
        setType(e.target.id)
    };
    return (
        <div className="admin-create-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => props.togglePopup(false)}>
                    <img alt="close" src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h3>Create Answer</h3>
            <div >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={type !== "teacher" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="teacher"
                        onClick={handleClick}>Teacher</div>
                    <div className={type !== "freeelective" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="freeelective"
                        onClick={handleClick}>Free Elective</div>
                    <div className={type !== "place" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="place"
                        onClick={handleClick}>Place</div>
                    <div className={type !== "degree" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="degree"
                        onClick={handleClick}>Degree</div>
                    <div className={type !== "plan" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="plan"
                        onClick={handleClick}>Plan</div>
                    <div className={type !== "major" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="major"
                        onClick={handleClick}>Major</div>
                </div>
                <div className="admin-create-ans-box-info-container">
                    {type === "teacher"
                        ? <CreateTeacher trigger={props.togglePopup}/>
                        : type === "freeelective"
                            ? <CreateFreeElective trigger={props.togglePopup}/>
                            : type === "place"
                                ? <CreatePlace trigger={props.togglePopup}/>
                                : type === "degree"
                                    ? <CreateDegree trigger={props.togglePopup}/>
                                    : type === "plan"
                                        ? <CreatePlan trigger={props.togglePopup}/>
                                        : <CreateMajor trigger={props.togglePopup}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopupCreAns;