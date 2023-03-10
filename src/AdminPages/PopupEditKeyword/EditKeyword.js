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
    

    const url = "http://localhost:5000/major-key/" + props.id

    const fetchData = async () => {
        console.log(url)
        console.log(course)
        console.log(name)
        fetch(url, putOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(e => console.log(e))
      }

    useEffect(()=>{
        
        
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
                        type="text" name="name" placeholder={props.keyname} onChange = {(e) => setName(e.target.value)}/>
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