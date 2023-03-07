import React,{useState} from "react";
import close from "../../img/close (3).png";

const EditPlace = (props) => {
    const [Name, setName] = useState('');
        const [Room, setRoom] = useState('');
        const [Loc, setLoc] = useState('');
        const onCancle = e => {
                e.preventDefault()
                setName('')
                setRoom('')
                setLoc('')
                props.trigger(false)
        }
        const onSubmit = e => {
                e.preventDefault()

                const payload = {
                        Name,
                        Room,
                        Loc,
                }

                console.log('submit value', payload)
                setName('')
                setRoom('')
                setLoc('')
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
                    <label >ตึก</label>
                    <input className="admin-input-info-container" id="name" type="text"
                        value={Name}
                        onChange={e => setName(e.target.value)} />
                    <label >ห้อง</label>
                    <input className="admin-input-info-container" id="room" type="text"
                        value={Room}
                        onChange={e => setRoom(e.target.value)} />
                    <label >พิกัดสถานที่</label>
                    <input className="admin-input-info-container" id="location" type="text"
                        value={Loc}
                        onChange={e => setLoc(e.target.value)} />
                </form>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="admin-create-answer-cancle-button " onClick={() => { props.trigger(false) }}>Cancle</div>
                <div className="admin-create-answer-done-button" onClick={onSubmit}>Done</div>
            </div>
        </div>
    );
};

export default EditPlace;