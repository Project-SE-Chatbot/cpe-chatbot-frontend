import { useEffect, useState } from "react";
import EditDegree from "./EditDegree";
import EditFreeElective from "./EditFreeElective";
import EditMajor from "./EditMajor";
import EditPlace from "./EditPlace";
import EditPlan from "./EditPlan";
import EditTeacher from "./EditTeacher";
const PopupEditAns = (props) =>{
    const [type, setType] = useState("");
    

    useEffect(()=>{
        setType(props.type);
        // console.log(type)
    },[props.type])

    return (props.trigger) ? (
        <div>
            {type === "Degree"
                        ? <EditDegree trigger={props.setTrigger}/>
                        : type === "Major"
                            ?   <EditMajor trigger={props.setTrigger}/>
                            : type === "Place"
                                ? <EditPlace trigger={props.setTrigger}/>
                                : type === "Plan"
                                    ? <EditPlan trigger={props.setTrigger}/>
                                    : type === "FreeElective"
                                        ? <EditFreeElective trigger={props.setTrigger}/>
                                        : type === "Teacher" ?
                                        <EditTeacher trigger={props.setTrigger}/>
                                        :""
                    }
        </div>
    ): ""
}

export default PopupEditAns