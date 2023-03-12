import '../css/ConfirmDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'

const ConfirmDeleteKeyword = (props) => {
    const [course,setCourse] = useState(props.keyID)
    const [name,setName] = useState("")
    var putOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            [course] : ""
        }),
    };
    

    let url
        if (props.title === "Major") {
        url = "http://localhost:5000/major-key/" + props.id
    } else if (props.title === "Place") {
        url = "http://localhost:5000/place-key/" + props.id
    } else if (props.title === "Teacher") {
        url = "http://localhost:5000/teacher-key/" + props.id
    } else if (props.title === "Major Elective"){
        url = "http://localhost:5000/major-elec-key/" + props.id
    } else if (props.title === "Free elective"){
        url = "http://localhost:5000/free-elec-key/" + props.id
    }
    

    const delfetchData = async () => {
        console.log(url)
        console.log(course)
        console.log(props.title)
        console.log(props.id)
        fetch(url, putOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(e => console.log(e))
      }

    useEffect(()=>{
        
        
    },[])

    return (props.trigger) ? (
        <div className="confirmDeleteContainer">
            <div className='exit' >
                <FontAwesomeIcon icon={faXmark} onClick={()=> props.setTrigger(false)}/>
            </div>
            <div className='titleText'>
                Are you sure want to delete this keyword?
            </div>
            <div className='detailContainer'>
                <div className='detailText'>
                    If you delete the question you can’t recover it.
                </div>
            </div>
            <div className='buttonContainer'>
                <div className='editButton' onClick={()=> props.setTrigger(false)}>
                    <div className='editText' >
                        Cancle
                    </div>
                </div>
                <div className='deleteButton'>
                    <div className='deleteText' onClick={()=> {delfetchData();props.setTrigger(false);props.refresh()}}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    ): ""
}

export default ConfirmDeleteKeyword