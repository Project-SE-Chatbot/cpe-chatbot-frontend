import '../css/EditKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { getValue } from '@mui/system'

const EditKeyword = (props) => {
    const [name,setName] = useState()
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
                <div className='doneText' onClick={()=> props.setKeyName(name)}>
                    Save Changed
                </div>
            </div>
        </div>
    </div>
    ):""
}

export default EditKeyword