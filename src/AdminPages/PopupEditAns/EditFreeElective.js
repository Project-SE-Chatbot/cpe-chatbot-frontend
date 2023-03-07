import React,{useState} from "react";
import close from "../../img/close (3).png";

const EditFreeElective = (props) => {
    const [Name, setName] = useState('');
        const [Review, setReview] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setReview('')
                
              }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Name,
                        Review
                }

                console.log('submit value', payload)
                setName('')
                setReview('')
        }
    return (
        <div className="admin-popup-edit-ans-box">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-button" onClick={() => { props.trigger(false) }}>
                    <img src={close} style={{ width: "15px", height: "15px" }}></img>
                </button>
            </div>
            <h2>Edit answer</h2>
            <div className="admin-create-ans-box-info-container">
                <form className="admin-create-ans-box-form-info-container">
                    <label >วิชา</label>
                    <input className="admin-input-info-container" id="name" type="text"
                        value={Name}
                        onChange={e => setName(e.target.value)} />
                    <label >รีวิว</label>
                    <input className="admin-input-info-container" id="FreeElective" type="text"
                        value={Review}
                        onChange={e => setReview(e.target.value)} />

                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => { props.trigger(false) }}>Cancle</div>
                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
            </div>
        </div>
    );
};

export default EditFreeElective;