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



    useEffect(() => {

    }, [value, comment, detailText, date, headText])

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
                <SearchBar setTrigger = {setCreate}></SearchBar>
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
            <div>
                <KeywordBox/>
            </div>
            
            <div>
                <CreateKeyWord trigger = {create} setTrigger={setCreate}/>
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