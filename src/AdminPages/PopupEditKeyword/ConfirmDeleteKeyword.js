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
    

    const url = "http://localhost:5000/major-key/" + props.id

    const delfetchData = async () => {
        console.log(url)
        console.log(course)
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