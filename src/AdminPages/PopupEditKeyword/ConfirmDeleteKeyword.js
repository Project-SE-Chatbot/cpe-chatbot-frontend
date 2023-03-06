import '../css/ConfirmDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from 'react'

const ConfirmDeleteKeyword = (props) => {
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
                    <div className='deleteText'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    ): ""
}

export default ConfirmDeleteKeyword