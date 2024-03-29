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
    const [titleUrl, setT] = useState(props.title);
    const [detailText, setDT] = useState("braaaaaa");

    const [editAns, setEditAns] = useState(false)

    const [create, setCreate] = useState(false)

    const [delAnswer, setDelAnswer] = useState(false)

    const [refresh, setRefresh] = useState(false)

    const handleRefresh = () => {
        setRefresh(!refresh)
        props.refresh()
    }


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url

    if (props.title === "Major") {
        url = "http://localhost:5000/major-key/" + props.id
    } else if (props.title === "Place") {
        url = "http://localhost:5000/place-key/" + props.id
    } else if (props.title === "Teacher") {
        url = "http://localhost:5000/teacher-key/" + props.id
    } else if (props.title === "Major Elective") {
        url = "http://localhost:5000/major-elec-key/" + props.id
    } else if (props.title === "Free elective") {
        url = "http://localhost:5000/free-elec-key/" + props.id
    } else if (props.title === "Register") {
        url = "http://localhost:5000/register-key/" + props.id
    } else if (props.title === "Degree") {
        url = "http://localhost:5000/degree-key/" + props.id
    }

    const [data, setData] = useState(null);
    const [keyList, setList] = useState(null);

    const [clickCreate, setCC] = useState(false);

    const clickCC = () => {
        setCC(!clickCreate)
    }


    useEffect(() => {

    }, [refresh])


    useEffect(() => {
        const fetchData = async () => {
            // console.log(url)
            await fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => { setList(result); setData(result); })
                .catch(e => console.log(e))
        }
        fetchData()
    }, [props.date, props.title, props.detail, props.star, refresh])

    let showKey
    const [keyList_arr, setArr] = useState();
    if (data !== null) {
        // console.log(keyList)
        // console.log(keyList_arr)
        // showKey =
        //  keyList_arr.map(x => {

        //     console.log(x)
        //     console.log(keyList)
        //     return <KeywordBox name={x} acc={20} />
        // })
        showKey =
            <div className='keywordBoxContainer'>
                <KeywordBox name={keyList.key_1} id={props.id} keyID={"key_1"} acc={20} refresh={handleRefresh} title={props.title} enableEdit={false} />
                <KeywordBox name={keyList.key_2} id={props.id} keyID={"key_2"} acc={30} refresh={handleRefresh} title={props.title} enableEdit={true} />
                <KeywordBox name={keyList.key_3} id={props.id} keyID={"key_3"} acc={80} refresh={handleRefresh} title={props.title} enableEdit={true} />
                <KeywordBox name={keyList.key_4} id={props.id} keyID={"key_4"} acc={90} refresh={handleRefresh} title={props.title} enableEdit={true} />
                <KeywordBox name={keyList.key_5} id={props.id} keyID={"key_5"} acc={10} refresh={handleRefresh} title={props.title} enableEdit={true} />
                <KeywordBox name={keyList.key_6} id={props.id} keyID={"key_6"} acc={20} refresh={handleRefresh} title={props.title} enableEdit={true} />
            </div>
    }


    return (props.id==props.SelectedBox && props.trigger) ? (
        <div>
            <div className="AnswerEdit">
                {/* <div className="Date">
                    {props.date}
                </div> */}
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
                    <div className='ButtonEdit' style={{ cursor: 'pointer' }} onClick={() => setEditAns(true)}>
                        <div className='EditText'>
                            Edit
                        </div>
                    </div>

                    <div className='ButtonDelete' style={{ cursor: 'pointer' }} onClick={() => setDelAnswer(true)}>
                        <div className='DeleteText' >
                            Delete
                        </div>
                    </div>
                </div>

            </div>

            <div >
                <SearchBar setTrigger={setCreate} keyNum={3} clickCC={clickCC}></SearchBar>
            </div>

            <div className='collumText'>
                <div className='keywordCollum'>
                    Keywords
                    <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
                </div>
                {/* <div className='accuracyCollum'>
                    Accuracy
                    <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
                </div>
                <div className='lastEditedCollum'>
                    Last edited
                    <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }} />
                </div> */}
            </div>
            <div className='keywordBoxContainer'>
                {data && showKey}
            </div>

            <div>
                <CreateKeyWord id={props.id} title={props.title} trigger={create} setTrigger={setCreate} refresh={handleRefresh} clickCC={clickCreate} />
            </div>
            <div>
                <ConfirmDeleteQuestion title={props.title} name={props.name} courseID={props.id} trigger={delAnswer} setTrigger={setDelAnswer} refresh={handleRefresh} editTrigger={props.editTrigger}/>
            </div>
            <div>
                <PopupEditAns title={props.title} trigger={editAns} setTrigger={setEditAns} courseID={props.id} refresh={handleRefresh} trigRefresh={refresh} />
            </div>
        </div>

    ) : ""
}

export default AnswerEdit