import plus from "../img/plus (1).png";
import '../css/SearchBar.css'
import { useState } from "react";
const SearchBar = (props) => {
    const [keyNum, setKeyNum] = useState(0);
    return (
        <div className='SearchBar'>
            <div className="SearchContainer">
                <form>
                    <label>
                        <input className="inputBar"
                            type="text" name="name" placeholder="   Search keywords..." />
                    </label>
                </form>
                <div className="button" style={{ cursor: 'pointer' }} onClick = {()=> {props.setTrigger(true); props.clickCC()}}>
                    <img src={plus} style={{ width: "35px", height: "35px", cursor: 'pointer' }}>

                    </img>
                </div>
            </div>

            <div className="Detail">
                We’ve found {props.keyNum} Keywords
            </div>

        </div>
    )
}

export default SearchBar