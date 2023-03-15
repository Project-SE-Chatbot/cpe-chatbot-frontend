import React, { useEffect, useState } from "react";
import close from "../../img/close (3).png";

const EditPlan = (props) => {
  const [Name, setName] = useState("");
  const [url, seturl] = useState("");
  
  const [data, setData] = useState(null);

    // var geturl = "http://localhost:5000/register/" + props.courseID
    // var puturl = "http://localhost:5000/register/name"

    var geturl = "http://10.10.182.145:5000/register/" + props.courseID
    var puturl = "http://10.10.182.145:5000/register/name"

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    var requestPut = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: Name,
              link: url
            })
      }

    const setValue = () => {
        setName(data.name)
        seturl(data.link)
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(geturl)
            await fetch(geturl, requestOptions)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(e => console.log(e))
        }
        if (props.title === "Register") {
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
          <label>หัวข้อเกี่ยวกับการรับเข้าเรียน</label>
          <input
            className="admin-input-info-container"
            id="name"
            type="text"
            value={Name}
            readOnly
          />
          <label>urlสำหรับข้อมูลเพิ่มเติม</label>
          <input
            className="admin-input-info-container"
            id="link"
            type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
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

export default EditPlan;
