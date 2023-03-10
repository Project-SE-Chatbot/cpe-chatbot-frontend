import '../css/AnswerEdit.css'
import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import * as React from 'react';
import { Rating, } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import KeywordBox from './KeywordBox'
import CreateKeyWord from '../PopupEditKeyword/CreateKeyword'

import ConfirmDeleteQuestion from '../PopupEditKeyword/ConfirmDeleteQuestion'
import PopupEditAns from '../PopupEditAns/PopupEditAns'


const AnswerEdit = (props) => {
    const [over, setOver] = useState(false);
    const [value, setValue] = useState(5);
    const [comment, setComment] = useState(20);
    const [headText, setHT] = useState("Major");
    const [detailText, setDT] = useState("braaaaaa");
    const [date, setDate] = useState("Yesterday");

    const [editAns,setEditAns] = useState(false)

    const [create,setCreate] = useState(false)

    const [delAnswer,setDelAnswer] = useState(false)

    const [key1,setKey1] = useState(0)
    const [key2,setKey2] = useState(0)
    const [key3,setKey3] = useState(0)
    const [key4,setKey4] = useState(0)
    const [key5,setKey5] = useState(0)
    const [key6,setKey6] = useState(0)
    

    let countKey = 0

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    const url = "http://localhost:5000/major-key/"+props.id

    const [data,setData] = useState(null);
    const [keyList, setList] = useState(null);

    useEffect(() => {
        countKey = key1+key2+key3+key4+key5+key6
        console.log(countKey)
    }, [value, comment, detailText, date, headText,countKey])

    useEffect(() => {
        const fetchData = async () => {
            await fetch(url, requestOptions)
              .then(response => response.json())
              .then(result => {setList(result);setData(result)})
              .catch(e => console.log(e))
          }
          fetchData()
    }, [props.date,props.title,props.detail,props.star])

    let showKey
    if(data !== null){
        showKey =
        <div className='keywordBoxContainer'>
            <KeywordBox name={keyList.key_1} acc={20} setCount={setKey1}/>
            <KeywordBox name={keyList.key_2} acc={30} setCount={setKey2}/>
            <KeywordBox name={keyList.key_3} acc={80} setCount={setKey3}/>
            <KeywordBox name={keyList.key_4} acc={90} setCount={setKey4}/>
            <KeywordBox name={keyList.key_5} acc={10} setCount={setKey5}/>
            <KeywordBox name={keyList.key_6} acc={20} setCount={setKey6}/>
        </div>
    }
            
      

    return (props.trigger) ? (
        <div>
            <div className="AnswerEdit">
                <div className="Date">
                    {/* {date} */}
                    {props.date}
                </div>
                <div className='HeadText'>
                    {/* {headText} */}
                    {props.title}
                </div>
                <div className='Detail'>
                    <div className='DetailText'>
                        {/* {detailText} */}
                        {props.detail}
                    </div>
                    <div className='star'>
                        <Rating maxRating={5} defaultRating={
                            // value
                            props.star
                        } icon='star' size='massive' disabled />
                    </div>
                </div>
                <div className='Button'>
                    <div className='ButtonEdit' style={{cursor: 'pointer'}} onClick = {()=> setEditAns(true)}>
                        <div className='EditText'>
                            Edit
                        </div>
                    </div>

                    <div className='ButtonDelete' style={{cursor: 'pointer'}} onClick = {()=> setDelAnswer(true)}>
                        <div className='DeleteText' >
                            Delete
                        </div>
                    </div>
                </div>
                
            </div>

            <div >
                <SearchBar setTrigger = {setCreate} keyNum={countKey}></SearchBar>
            </div>
            
            <div className='collumText'>
                <div className='keywordCollum'>
                    Keywords
                    <FontAwesomeIcon icon={faChevronDown} style={{cursor: 'pointer'}}/>
                </div>
                <div className='accuracyCollum'>
                    Accuracy 
                    <FontAwesomeIcon icon={faChevronDown} style={{cursor: 'pointer'}}/>
                </div>
                <div className='lastEditedCollum'>
                    Last edited
                    <FontAwesomeIcon icon={faChevronDown} style={{cursor: 'pointer'}}/>
                </div>
            </div>

            {data && showKey}
            
            <div>
                <CreateKeyWord id={props.key} title={props.title} trigger = {create} setTrigger={setCreate}/>
            </div>
            <div>
                <ConfirmDeleteQuestion trigger = {delAnswer} setTrigger={setDelAnswer}/>
            </div>
            <div>
                <PopupEditAns type={props.title} trigger = {editAns} setTrigger={setEditAns}/>
            </div>
        </div>

    ):""
}

export default AnswerEdit