import React from "react";
import { useState } from 'react';


const Reaction = ({ message }) => {
  const [isOneClicked, setisOneClicked] = useState(false);
  const [isOneDisable, setisOneDisable] = useState(false);
  const [isTwoClicked, setisTwoClicked] = useState(false);
  const [isTwoDisable, setisTwoDisable] = useState(false);
  const [isThreeClicked, setisThreeClicked] = useState(false);
  const [isThreeDisable, setisThreeDisable] = useState(false);
  const [isFourClicked, setisFourClicked] = useState(false);
  const [isFourDisable, setisFourDisable] = useState(false);
  const [isFiveClicked, setisFiveClicked] = useState(false);
  const [isFiveDisable, setisFiveDisable] = useState(false);

  var scoreFeedbackUrl = ""
  // const [score,setScore] = useState(0);
  const handleClick = (e) => {
    let a ;
    if (e.target.className.includes("one")) {
      setisOneClicked(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
      console.log(message,1) ;
    } else if (e.target.className.includes("two")) {
      setisTwoClicked(true);
      setisOneDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
      console.log(message,2) ;
    } else if (e.target.className.includes("three")) {
      setisThreeClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
      console.log(message,3) ;
    } else if (e.target.className.includes("four")) {
      setisFourClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFiveDisable(true);
      console.log(message,4) ;
    }else if (e.target.className.includes("five")) {
      setisFiveClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
      console.log(message,5) ;
    }
  };
  const handleClassStyler = (buttonType) => {
    if (buttonType === 'one') {
      if (isOneClicked === true) {
        // setScore(1)
        return "reaction-button OneClicked";
      } else if (isOneDisable === true ) {
        return "reaction-button disable";
      } else if (isOneClicked === false && isOneDisable === false) {
        return "reaction-button one";
      }
    } else if (buttonType === 'two'){
      if (isTwoClicked === true) {
        // setScore(2)
        return "reaction-button TwoClicked";
      } else if (isTwoDisable === true ) {
        return "reaction-button disable";
      }
      else if (isTwoClicked === false && isTwoDisable === false) {
        return "reaction-button two";
      }
    }else if (buttonType === 'three'){
      if (isThreeClicked === true) {
        // setScore(3)
        return "reaction-button ThreeClicked";
      } else if (isThreeDisable === true ) {
        return "reaction-button disable";
      }
      else if (isThreeClicked === false && isThreeDisable === false) {
        return "reaction-button three";
      }
    }else if (buttonType === 'four'){
      if (isFourClicked === true) {
        // setScore(4)
        return "reaction-button TwoClicked";
      } else if (isFourDisable === true ) {
        return "reaction-button disable";
      }
      else if (isFourClicked === false && isFourDisable === false) {
        return "reaction-button four";
      }
    }else if (buttonType === 'five'){
      if (isFiveClicked === true) {
        // setScore(5)
        return "reaction-button FiveClicked";
      } else if (isFiveDisable === true ) {
        return "reaction-button disable";
      }
      else if (isFiveClicked === false && isFiveDisable === false) {
        return "reaction-button five";
      }
    }
    };
  return (
    <div className="reaction-container">
      <div className="help">Was this help?</div>
      <div className="reaction-button-container">
      <button disabled={isOneDisable}
        onClick={handleClick} className={handleClassStyler('one')}>1</button>
      <button disabled={isTwoDisable}
        onClick={handleClick} className={handleClassStyler('two')}>2</button>
      <button disabled={isTwoDisable}
        onClick={handleClick} className={handleClassStyler('three')}>3</button>
      <button disabled={isTwoDisable}
        onClick={handleClick} className={handleClassStyler('four')}>4</button>
      <button disabled={isTwoDisable}
        onClick={handleClick} className={handleClassStyler('five')}>5</button>
      </div>
    </div>
  );
};

export default Reaction;
