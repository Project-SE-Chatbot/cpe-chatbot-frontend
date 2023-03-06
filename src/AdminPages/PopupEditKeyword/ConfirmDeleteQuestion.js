import '../css/ConfirmDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ConfirmDeleteQuestion = () => {
    return (
        <div className="confirmDeleteContainer">
            <div className='exit'>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className='titleText'>
                Are you sure want to delete this Question?
            </div>
            <div className='detailContainer'>
                <div className='detailText'>
                    If you delete the question you can’t recover it.
                </div>
            </div>
            <div className='buttonContainer'>
                <div className='editButton'>
                    <div className='editText'>
                        Edit
                    </div>
                </div>
                <div className='deleteButton'>
                    <div className='deleteText'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteQuestion