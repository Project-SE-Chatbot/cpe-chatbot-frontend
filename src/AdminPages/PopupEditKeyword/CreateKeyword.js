import '../css/CreateKeyword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const CreateKeyWord = (props) => {
    const putOption = {
        method: 'PUT',
        redirect: 'follow'
    }

    const RequestOption = {
        method: 'GET',
        redirect: 'follow'
    }

    const [geturl,setUrl] = useState(null);
    const [puturl,setPutUrl] = useState(null);
    const [keyword,setKeyword] = useState(null);
    const [checkKey,setCheck] = useState(null);

    
    


    const fetchData = async() => {
        setPutUrl("http://localhost:5000/"+props.title+"-key/"+props.id)
        await fetch(geturl, RequestOption)
          .then(response => response.json())
          .then(result => setCheck(result))
          .catch(e => console.log(e))
    }

    // let direction
    // checkKey.map(element =>
    //      {if(element == null){
    //         direction = element
    //      }}
    //      )
    
        
    

    const fetchPutData = async () => {
        setUrl("http://localhost:5000/"+props.title.toLowerCase()+"direction"+"/"+props.key_1)
        await fetch(puturl, putOption)
          .then(response => response.json())
          .then(result => keyword)
          .catch(e => console.log(e))
    }

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
                            type="text" name="name" placeholder="  Write Keyword..." onChange={(e)=> setKeyword(e)}/>
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
                    <div className='doneText' onClick={()=> {props.fetchData();props.setTrigger(false);}}>
                        Create
                    </div>
                </div>
            </div>
        </div>
    ):""
}

export default CreateKeyWord