import '../css/CreateKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const CreateKeyWord = (props) => {
    return (props.trigger) ? (
        <div className="createKeywordContainer">
            <div className='exit' onClick={()=> props.setTrigger(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className='titleText'>
                Create keyword
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
                <div className='editButton' onClick={()=> props.setTrigger(false)}>
                    <div className='editText'>
                        cancle
                    </div>
                </div>
                <div className='doneButton'>
                    <div className='doneText'>
                        Create
                    </div>
                </div>
            </div>
        </div>
    ):""
}

export default CreateKeyWord