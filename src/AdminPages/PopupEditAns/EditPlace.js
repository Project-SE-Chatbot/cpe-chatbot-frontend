import React, { useEffect, useState } from "react";
import close from "../../img/close (3).png";

const EditPlace = (props) => {
  const [Room, setRoom] = useState("");
  const [Building, setBuilding] = useState("");
  const [Floor, setFloor] = useState("");
  const [urlLocation, seturlLocation] = useState("");
  
  const [data, setData] = useState(null);

    // var geturl = "http://localhost:5000/place/" + props.courseID
    // var puturl = "http://localhost:5000/place/room"
    var geturl = "http://10.10.182.145:5000/place/" + props.courseID
    var puturl = "http://10.10.182.145:5000/place/room"

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    var requestPut = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              building: Building,
              floor: Floor,
              room: Room,
              link_location: urlLocation
            })
      }

    const setValue = () => {
        setBuilding(data.building)
        setRoom(data.room)
        setFloor(data.floor)
        seturlLocation(data.link_location)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(geturl)
            await fetch(geturl, requestOptions)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(e => console.log(e))
        }
        if (props.title === "Place") {
            fetchData()
        }

    }, [props.trigger])


    const fetchPutData = async () => {
        fetch(puturl, requestPut)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(e => console.log(e))
    }

    useEffect(() => {


    }, [])

    useEffect(() => {
        if (data) {
            setValue()
        }
    }, [data])

  return (
    <div className="admin-popup-edit-ans-box">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="admin-button"
          onClick={() => {
            props.trigger(false);
          }}
        >
          <img src={close} style={{ width: "15px", height: "15px" }}></img>
        </button>
      </div>
      <h2>Edit answer</h2>
      <div className="admin-create-ans-box-info-container">
        <form className="admin-create-ans-box-form-info-container">
          <label>ห้อง</label>
          <input
            className="admin-input-info-container"
            id="room"
            type="text"
            value={Room}
            readOnly
          />
          <label>ตึก(สถานที่)</label>
          <input
            className="admin-input-info-container"
            id="building"
            type="text"
            value={Building}
            onChange={(e) => setBuilding(e.target.value)}
          />
          <label>ชั้น</label>
          <input
            className="admin-input-info-container"
            id="floor"
            type="text"
            value={Floor}
            onChange={(e) => setFloor(e.target.value)}
          />
          <label>urlพิกัดตึก(สถานที่)</label>
          <input
            className="admin-input-info-container"
            id="link_location"
            type="text"
            value={urlLocation}
            onChange={(e) => seturlLocation(e.target.value)}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className="admin-create-answer-cancle-button "
          onClick={() => {
            props.trigger(false);
          }}
        >
          Cancle
        </div>
        <div className="admin-create-answer-done-button" onClick={()=>{fetchPutData(); props.trigger(false); props.refresh()}}>
          Done
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
