import { style } from '@mui/system'
import { useEffect, useState } from 'react'
import '../css/KeywordBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faFilePen } from "@fortawesome/free-solid-svg-icons"

const KeywordBox = () => {
    const [key, setKey] = useState("ซอฟแวร์ไงโจ๊ะๆ")
    const [acc, setAcc] = useState(90)
    const [color, setColor] = useState("")
    const [date, setDate] = useState("yesterday")

    function check(acc) {
        if (acc > 0) {
            if (acc > 79) {
                return setColor("#4caf50")
            }
            if (acc = 50) {
                return setColor("#cddc39")
            }
            if (acc > 39) {
                return setColor("#ffc107")
            }
            if (acc > 19) {
                return setColor("#ff5722")
            }
        }
    }

    function limit(acc) {
        if (acc > 100) {
            return setAcc(100)
        }
        if (acc < 0) {
            return setAcc(0)
        }
    }

    useEffect(() => {
        limit(acc)
        check(acc)
    }, [acc])


    return (
        <div className='keywordContainer'>
            <div className='keywordText'>
                {key}
            </div>
            <div className='accContainer'>
                <div className='accuracy' style={{ 'background': color }}>
                    <div className='accText' >
                        {acc}%
                    </div>
                </div>
            </div>
            <div className='lastEditText'>
                {date}
            </div>
            <div className='editDelContainer'>
                <div className='editIcon'>
                    <FontAwesomeIcon icon={faFilePen} />
                </div>
                <div className='delIcon'>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>

            </div>
        </div>
    )
}

export default KeywordBox