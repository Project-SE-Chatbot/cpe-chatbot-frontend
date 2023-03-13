import { useState,useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import * as React from 'react';
import { Rating, } from 'semantic-ui-react'
import '../css/AnswerBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments} from "@fortawesome/free-solid-svg-icons"
import AnswerEdit from './AnswerEdit'

const AnswerBox = (props) =>{
    const [over,setOver] = useState(false);
    const [value, setValue] = useState(4);
    const [comment, setComment] = useState(20);
    const [headText, setHT] = useState("Teacher");
    const [detailText, setDT] = useState("braaaaaaaaaaaaaaaaaaaaaa");
    const [date, setDate] = useState("Yesterday");

    let handleOver = () =>{
        setOver(!over);
        props.editTrigger(!over);
        props.setTitle(props.title);
        props.setDetail(props.detail);
        props.setStar(props.star);
        props.setDate(props.date);
        props.setID(props.course_id);
    }

    const isOver = {
        border: over ? '3px solid #6B7EB6':" ",
        cursor: 'pointer'
    }

    useEffect(() => {
        // props.setTitle(props.title);
        // props.setDetail(props.detail);
        // props.setStar(props.star);
        // props.setDate(props.date);
        // props.setID(props.course_id);
    },[props.star,props.detail,props.title,props.date])

    useEffect(() => {
        props.setDetail(props.detail);
    },[props.detail])

    

    return (
        <div className="AnswerBox" onClick={() => {handleOver();}} style={isOver}>
            {/* <div className='Date'>
                    {props.date}
            </div> */}
            <div className="HeadText">
                    {props.title}
            </div>
            <div className="DetailText">
                    {props.detail}
            </div>
            <div className='Comment'>
                <div className='CommuIcon'>
                    <FontAwesomeIcon icon={faComments} />
                </div>
                <div>
                    {comment}
                </div>
                <div className='star'>
                    <Rating  maxRating={5} defaultRating={props.star} icon='star' size='mini' disabled/>
                </div>
            </div>
            {/* <div className='edit'>
                <AnswerEdit></AnswerEdit>
            </div> */}
        </div>
    )
}

export default AnswerBox