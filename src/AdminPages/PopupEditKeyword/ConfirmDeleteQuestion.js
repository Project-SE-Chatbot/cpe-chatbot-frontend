import '../css/ConfirmDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ConfirmDeleteQuestion = (props) => {
    return (props.trigger) ? (
        <div className="confirmDeleteContainer">
            <div className='exit' onClick={() =>props.setTrigger(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className='titleText'>
                Are you sure want to delete this answer?
            </div>
            <div className='detailContainer'>
                <div className='detailText'>
                    If you delete the question you can’t recover it.
                </div>
            </div>
            <div className='buttonContainer'>
                <div className='editButton' onClick={() =>props.setTrigger(false)}>
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
    ):""
}

export default ConfirmDeleteQuestion