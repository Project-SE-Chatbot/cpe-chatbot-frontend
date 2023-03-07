import { useEffect, useState } from "react";
import EditDegree from "./PopupEditAns/EditDegree";
import EditFreeElective from "./PopupEditAns/EditFreeElective";
import EditMajor from "./PopupEditAns/EditMajor";
import EditPlace from "./PopupEditAns/EditPlace";
import EditPlan from "./PopupEditAns/EditPlan";
import EditTeacher from "./PopupEditAns/EditTeacher";
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