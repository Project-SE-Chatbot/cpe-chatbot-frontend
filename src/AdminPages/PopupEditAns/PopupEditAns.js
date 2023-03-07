import React from "react";
import close from "../../img/close (3).png";
import EditDegree from './EditDegree'
import EditFreeElective from './EditFreeElective'
import EditMajor from './EditMajor'
import EditPlan from './EditPlan'
import EditPlace from './EditPlace'
import EditTeacher from './EditTeacher'

const PopupEditAns= (props) => {
    return (props.trigger) ?(
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button"
                onClick={() =>props.setTrigger(false)}>
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            {props.type === "Teacher"
                        ? <EditTeacher/>
                        : props.type === "Free Elective"
                            ? <EditFreeElective/>
                            : props.type === "Place"
                                ? <EditPlace/>
                                : props.type === "Degree"
                                    ? <EditDegree/>
                                    : props.type === "Plan"
                                        ? <EditPlan />
                                        : <EditMajor />
                    }

        </div>
    ):""
};

export default PopupEditAns;