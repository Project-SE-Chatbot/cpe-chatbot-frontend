import '../css/EditKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const EditKeyword = () => {
    return (<div className="editKeywordContainer">
        <div className='exit'>
            <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className='titleText'>
            Edit keyword
        </div>
        <div className='inputContainer'>
            <form>
                <label>
                    <input className="inputCKbar"
                        type="text" name="name" placeholder="  Write Keyword..." />
                </label>
            </form>
        </div>
        <div className='buttonContainer'>
            <div className='editButton'>
                <div className='editText'>
                    Edit
                </div>
            </div>
            <div className='doneButton'>
                <div className='doneText'>
                    Save Changed
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditKeyword