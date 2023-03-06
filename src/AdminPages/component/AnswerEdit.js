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
import EditKeyword from '../PopupEditKeyword/EditKeyword'
import ConfirmDeleteKeyword from '../PopupEditKeyword/ConfirmDeleteKeyword'
import ConfirmDeleteQuestion from '../PopupEditKeyword/ConfirmDeleteQuestion'


const AnswerEdit = () => {
    const [over, setOver] = useState(false);
    const [value, setValue] = useState(5);
    const [comment, setComment] = useState(20);
    const [headText, setHT] = useState("Major");
    const [detailText, setDT] = useState("braaaaaa");
    const [date, setDate] = useState("Yesterday");

    const [edit,setEdit] = useState(false)


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
                    <div className='ButtonEdit' style={{cursor: 'pointer'}}>
                        <div className='EditText'>
                            Edit
                        </div>
                    </div>

                    <div className='ButtonDelete' style={{cursor: 'pointer'}}>
                        <div className='DeleteText'>
                            Delete
                        </div>
                    </div>
                </div>
                
            </div>
            <div >
                <SearchBar></SearchBar>
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
                {/* <CreateKeyWord/> */}
            </div>
            <div>
                {/* <EditKeyword/> */}
            </div>
            <div>
                {/* <ConfirmDeleteKeyword/> */}
            </div>
            <div>
            {/* <ConfirmDeleteQuestion/> */}
            </div>
        </div>

    )
}

export default AnswerEdit