import '../css/AnswerEdit.css'
import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import * as React from 'react';
import { Rating, } from 'semantic-ui-react'
import SearchBar from './SearchBar'


const AnswerEdit = () => {
    const [over, setOver] = useState(false);
    const [value, setValue] = useState(5);
    const [comment, setComment] = useState(20);
    const [headText, setHT] = useState("Major");
    const [detailText, setDT] = useState("braaaaaa");
    const [date, setDate] = useState("Yesterday");

    useEffect(() => {

    }, [value, comment, detailText, date, headText])
    return (
        <div>
            <div className="AnswerEdit">
                <div className="Date">
                    {date}
                </div>
                <div className='HeadText'>
                    {headText}
                </div>
                <div className='Detail'>
                    <div className='DetailText'>
                        {detailText}
                    </div>
                    <div className='star'>
                        <Rating maxRating={5} defaultRating={value} icon='star' size='massive' disabled />
                    </div>
                </div>
                <div className='Button'>
                    <div className='ButtonEdit'>
                        <div className='EditText'>
                            Edit
                        </div>
                    </div>

                    <div className='ButtonDelete'>
                        <div className='DeleteText'>
                            Delete
                        </div>
                    </div>
                </div>
                
            </div>
            <div >
                <SearchBar></SearchBar>
            </div>
        </div>

    )
}

export default AnswerEdit