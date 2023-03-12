import { useEffect, useState } from "react";
import EditDegree from "./EditDegree";
import EditFreeElective from "./EditFreeElective";
import EditMajor from "./EditMajor";
import EditPlace from "./EditPlace";
import EditRegister from "./EditRegister";
import EditTeacher from "./EditTeacher";
import EditMajorElective from "./EditMajorElective";
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
                                : type === "Register"
                                    ? <EditRegister trigger={props.setTrigger}/>
                                    : type === "Free elective"
                                        ? <EditFreeElective trigger={props.setTrigger}/>
                                        : type === "Teacher" 
                                            ? <EditTeacher trigger={props.setTrigger}/>
                                            : type === "Major Elective" 
                                                ? <EditMajorElective trigger={props.setTrigger}/>
                                                :""
                    }
        </div>
    ): ""
}

export default PopupEditAns