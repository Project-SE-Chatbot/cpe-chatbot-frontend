import '../css/CreateKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'

const CreateKeyWord = (props) => {
    const [data,setData] = useState(null)
    const [key,setKey] = useState("")
    const [index,setIndex] = useState("null")

    const [courseID,setCourse] = useState(props.id)

    const putOption = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            [index] : key
        }),
        redirect: 'follow'
    }

    const RequestOption = {
        method: 'GET',
        redirect: 'follow'
    }

    

    let url
        if (props.title === "Major") {
        // url = "http://localhost:5000/major-key/" + props.id
        url = "http://localhost:5000/major-key/" + props.id
    } else if (props.title === "Place") {
        // url = "http://localhost:5000/place-key/" + props.id
        url = "http://localhost:5000/place-key/" + props.id
    } else if (props.title === "Teacher") {
        // url = "http://localhost:5000/teacher-key/" + props.id
        url = "http://localhost:5000/teacher-key/" + props.id
    } else if (props.title === "Major Elective"){
        // url = "http://localhost:5000/major-elec-key/" + props.id
        url = "http://localhost:5000/major-elec-key/" + props.id
    } else if (props.title === "Free elective"){
        // url = "http://localhost:5000/free-elec-key/" + props.id
        url = "http://localhost:5000/free-elec-key/" + props.id
    } else if (props.title === "Register"){
        // url = "http://localhost:5000/register-key/" + props.id
        url = "http://localhost:5000/register-key/" + props.id
    } else if (props.title === "Degree"){
        // url = "http://localhost:5000/degree-key/" + props.id
        url = "http://localhost:5000/degree-key/" + props.id
    }

    const [refresh,setRefresh] = useState(false)

    const handleRefresh = () =>{
        setRefresh(!refresh)
    }

    const fetchData = async () => {
        fetch(url, RequestOption)
          .then(response => response.json())
          .then(result => setData(result))
          .catch(e => console.log(e))
    }

    const fetchPutData = async () => {
        fetch(url, putOption)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(e => console.log(e))
    }

    const checkIndex = async() =>{
         if(data.key_1 === ""){
            setIndex("key_1")
        } 
        else if(data.key_2 === ""){
            setIndex("key_2")
        }
        else if(data.key_3 === ""){
            setIndex("key_3")
        }
        else if(data.key_4 === ""){
            setIndex("key_4")
        }
        else if(data.key_5 === ""){
            setIndex("key_5")
        }
        else if(data.key_6 === ""){
            setIndex("key_6")
        }else {
            setIndex("lock")
        }
    }

    const maximumKey = () =>{
        alert("You have Maximum Key")
    }

    useEffect(()=>{
        fetchData();
        {console.log("Refersh!!!!!!!!!!!!!!!")}
    },[refresh,props.clickCC])

    

    useEffect(()=>{
        if(data){
            checkIndex()
            {console.log("ReCheckkk")}
            
        }
    },[data])

    
        

    return (props.trigger) ? (
        <div className="createKeywordContainer">
            {console.log("Next_index: " + index)}
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
                            type="text" name="name" placeholder="  Write Keyword..." onChange={(e)=> setKey(e.target.value)}/>
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
                    <div className='doneText' onClick={()=> {props.setTrigger(false); if(index !== "lock"){fetchPutData();}; if(index === "lock"){maximumKey();} props.refresh();}}>
                        Create
                    </div>
                </div>
            </div>
        </div>
    ):""
}

export default CreateKeyWord