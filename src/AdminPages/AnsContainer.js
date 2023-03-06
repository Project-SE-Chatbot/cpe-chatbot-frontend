import React from "react";
import plus from "../img/plus (1).png";
import { useState } from "react";
import PopupCreAns from "./PopupCreAns";

const AnsContainer = (props) => {
    const [showPopup, togglePopup] = useState(false);
    return (
        <div>
            <div className="admin-ans-box-container">
                <div className="admin-input-container">
                    <form>
                        <label>
                            <input className="admin-input-search-keyword"
                                type="text" name="name" placeholder="Search keywords" />
                        </label>
                    </form>
                    <button className="admin-add-create-ans-button"
                            onClick={() => togglePopup((prev) => !prev)}>
                        <img src={plus} style={{ width: "35px", height: "35px" }}></img>
                    </button>
                </div>
            </div>
            {showPopup && <PopupCreAns/>}
        </div>
    );
};

export default AnsContainer;