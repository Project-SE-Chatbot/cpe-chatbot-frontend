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
        setType(props.title);
        // console.log(type)
    },[props.title,props.refresh])

    return (props.trigger) ? (
        <div>
            {type === "Degree"
                        ? <EditDegree trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                        : type === "Major"
                            ?   <EditMajor trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                            : type === "Place"
                                ? <EditPlace trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                                : type === "Register"
                                    ? <EditRegister trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                                    : type === "Free elective"
                                        ? <EditFreeElective trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                                        : type === "Teacher" 
                                            ? <EditTeacher trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                                            : type === "Major Elective" 
                                                ? <EditMajorElective trigger={props.setTrigger} courseID={props.courseID} title={props.title} refresh={props.refresh}/>
                                                :""
                    }
        </div>
    ): ""
}

export default PopupEditAns