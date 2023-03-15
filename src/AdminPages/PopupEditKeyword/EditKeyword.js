import '../css/EditKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'
import { getValue } from '@mui/system'

const EditKeyword = (props) => {
    const [name,setName] = useState("")
    const [course,setCourse] = useState(props.keyID)

    var putOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            [course] : name
        }),
    };
    

    let url
        if (props.title === "Major") {
        url = "http://10.10.182.145:5000/major-key/" + props.id
    } else if (props.title === "Place") {
        url = "http://10.10.182.145:5000/place-key/" + props.id
    } else if (props.title === "Teacher") {
        url = "http://10.10.182.145:5000/teacher-key/" + props.id
    } else if (props.title === "Major Elective"){
        url = "http://10.10.182.145:5000/major-elec-key/" + props.id
    } else if (props.title === "Free elective"){
        url = "http://10.10.182.145:5000/free-elec-key/" + props.id
    } else if (props.title === "Register"){
        url = "http://10.10.182.145:5000/register-key/" + props.id
    } else if (props.title === "Degree"){
        url = "http://10.10.182.145:5000/degree-key/" + props.id
    }

    const fetchData = async () => {
        // console.log(url)
        // console.log(course)
        // console.log(name)
        fetch(url, putOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(e => console.log(e))
      }

    useEffect(()=>{
        
        
    },[])

    useEffect(()=>{
          setName(props.keyname)
      },[])

    return (props.trigger) ? (<div className="editKeywordContainer">
        <div className='exit'>
            <FontAwesomeIcon icon={faXmark} onClick={()=> props.setTrigger(false)}/>
        </div>
        <div className='titleText'>
            Edit keyword
        </div>
        <div className='inputContainer'>
            <form>
                <input className="inputCKbar"
                        type="text" name="name" value={name} onChange = {(e) => setName(e.target.value)}/>
            </form>
        </div>
        <div className='buttonContainer'>
            <div className='editButton'>
                <div className='editText' onClick={()=> props.setTrigger(false)} >
                    Cancle
                </div>
            </div>
            <div className='doneButton'>
                <div className='doneText' onClick={()=> {fetchData();props.setTrigger(false);props.refresh()}}>
                    Save Changed
                </div>
            </div>
        </div>
    </div>
    ):""
}

export default EditKeyword