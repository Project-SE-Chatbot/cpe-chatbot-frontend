import React from "react";
import close from "../img/close (3).png";
import InputInfo from "./inputInfo";
import { useState } from 'react';
import CreateTeacher from "./CreateAnsType/CreateTeacher";
import CreateFreeElective from "./CreateAnsType/CreateFreeElective";
import CreatePlace from "./CreateAnsType/CreatePlace";
import CreateDegree from "./CreateAnsType/CreateDegree";
import CreateMajor from "./CreateAnsType/CreateMajor";
import CreateRegister from "./CreateAnsType/CreateRegister";
import CreateMajorElective from "./CreateAnsType/CreateMajorElective";

const PopupCreAns = (props) => {
    const [type, setType] = useState("teacher");
    const handleClick = (e) => {
        setType(e.target.id)
    };
    return (props.trigger) ?(
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
                    <div className={type !== "register" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="register"
                        onClick={handleClick}>Register</div>
                    <div className={type !== "major" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="major"
                        onClick={handleClick}>Major</div>
                        <div className={type !== "majorelective" ? "admin-type-answr-box" : "admin-type-answr-box-selected"} id="majorelective"
                        onClick={handleClick}>Major Elective</div>
                </div>
    
                    {type === "teacher"
                        ? <CreateTeacher trigger={props.togglePopup}/>
                        : type === "freeelective"
                            ? <CreateFreeElective trigger={props.togglePopup}/>
                            : type === "place"
                                ? <CreatePlace trigger={props.togglePopup}/>
                                : type === "degree"
                                    ? <CreateDegree trigger={props.togglePopup}/>
                                    : type === "register"
                                        ? <CreateRegister trigger={props.togglePopup}/>
                                        : type === "major"
                                            ? <CreateMajor trigger={props.togglePopup}/>
                                            : <CreateMajorElective trigger={props.togglePopup}/>
                    }
                
            </div>
        </div>
    ):""
};

export default PopupCreAns;