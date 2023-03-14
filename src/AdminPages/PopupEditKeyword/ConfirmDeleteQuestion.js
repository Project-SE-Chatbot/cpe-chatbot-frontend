import '../css/ConfirmDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ConfirmDeleteQuestion = (props) => {

    let url

    if (props.title === "Major") {
        url = "http://localhost:5000/major/" + props.courseID
    } else if (props.title === "Place") {
        url = "http://localhost:5000/place/" + props.courseID
    } else if (props.title === "Teacher") {
        url = "http://localhost:5000/teacher/" + props.courseID
    } else if (props.title === "Major Elective") {
        url = "http://localhost:5000/major-elective/" + props.courseID
    } else if (props.title === "Free elective") {
        url = "http://localhost:5000/free-elective/" + props.courseID
    } else if (props.title === "Register") {
        url = "http://localhost:5000/register/" + props.courseID
    } else if (props.title === "Degree") {
        url = "http://localhost:5000/degree/" + props.courseID
    }

    const handleDelete = () => {
        console.log(url)
        const element = document.querySelector('#delete-request-set-headers .status');
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
        };
        fetch(url,requestOptions)
            .then(() => console.log('Delete successful') );

    }
    return (props.trigger) ? (
        <div className="confirmDeleteContainer">
            <div className='exit' onClick={() => props.setTrigger(false)}>
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
                <div className='editButton' onClick={() => props.setTrigger(false)}>
                    <div className='editText' >
                        Cancle
                    </div>
                </div>
                <div className='deleteButton' onClick={() => { handleDelete(); props.refresh();props.setTrigger(false);}}>
                    <div className='deleteText'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    ) : ""
}

export default ConfirmDeleteQuestion