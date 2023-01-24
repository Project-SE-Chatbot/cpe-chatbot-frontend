import React from "react";
import { useState } from 'react';

const Reaction = () => {
  const [isOneClicked, setisOneClicked] = useState(false);
  const [isOneDisable, setisOneDisable] = useState(false);
  const [isTwoClicked, setisTwoClicked] = useState(false);
  const [isTwoDisable, setisTwoDisable] = useState(false);
  const handleClick = (e) => {
    if (e.target.className.includes("one")) {
      setisOneClicked(true);
      setisTwoDisable(true);
    } else if (e.target.className.includes("two")) {
      setisTwoClicked(true);
      setisOneDisable(true);
    }
  };
  const handleClassStyler = (buttonType) => {
    if (buttonType === 'one') {
      if (isOneClicked === true) {
        return "reaction-button OneClicked";
      } else if (isOneDisable === true ) {
        return "reaction-button disable";
      } else if (isOneClicked === false && isOneDisable === false) {
        return "reaction-button one";
      }
    } else if (buttonType === 'two'){
      if (isTwoClicked === true) {
        return "reaction-button TwoClicked";
      } else if (isTwoDisable === true ) {
        return "reaction-button disable";
      }
      else if (isTwoClicked === false && isTwoDisable === false) {
        return "reaction-button two";
      }
    }
    };
  return (
    <div className="reaction-container">
      <div className="help">Was this help?</div>
      <button disabled={isOneDisable}
        onClick={handleClick} className={handleClassStyler('one')}>1</button>
      <button disabled={isTwoDisable}
        onClick={handleClick} className={handleClassStyler('two')}>2</button>
      <button className={"reaction-button three" }>3</button>
      <button className={"reaction-button four"}>4</button>
      <button className={"reaction-button five" }>5</button>
    </div>
  );
};

export default Reaction;
