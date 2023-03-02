import { useState,useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import * as React from 'react';
import { Rating, } from 'semantic-ui-react'
import '../css/AnswerBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments} from "@fortawesome/free-solid-svg-icons"

const AnswerBox = () =>{
    const [over,setOver] = useState(false);
    const [value, setValue] = useState(1);
    const [comment, setComment] = useState(20);
    const [headText, setHT] = useState("Major");
    const [detailText, setDT] = useState("braaaaaaaaaaaaaaaaaaaaaa");
    const [date, setDate] = useState("Yesterday");
    let handleOver = () =>{
        setOver(!over);
    }

    const isOver = {
        border: over ? '3px solid #6B7EB6':" "
    }

    useEffect(() => {

    },[value,comment,detailText,date,headText])

    return (
        <div className="AnswerBox" onClick={handleOver} style={isOver}>
            <div className='Date'>
                    {date}
            </div>
            <div className="HeadText">
                    {headText}
            </div>
            <div className="DetailText">
                    {detailText}
            </div>
            <div className='Comment'>
                <div className='CommuIcon'>
                    <FontAwesomeIcon icon={faComments} />
                </div>
                <div>
                    {comment}
                </div>
                <div className='star'>
                    <Rating  maxRating={5} defaultRating={value} icon='star' size='mini' disabled/>
                </div>
            </div>
        </div>
    )
}

export default AnswerBox