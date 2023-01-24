import React from "react";
import { useState } from 'react';

const Reaction = () => {
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
  const handleClick = (e) => {
    if (e.target.className.includes("one")) {
      setisOneClicked(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
    } else if (e.target.className.includes("two")) {
      setisTwoClicked(true);
      setisOneDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
    } else if (e.target.className.includes("three")) {
      setisThreeClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisFourDisable(true);
      setisFiveDisable(true);
    } else if (e.target.className.includes("four")) {
      setisFourClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFiveDisable(true);
    }else if (e.target.className.includes("five")) {
      setisFiveClicked(true);
      setisOneDisable(true);
      setisTwoDisable(true);
      setisThreeDisable(true);
      setisFourDisable(true);
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
    }else if (buttonType === 'three'){
      if (isThreeClicked === true) {
        return "reaction-button ThreeClicked";
      } else if (isThreeDisable === true ) {
        return "reaction-button disable";
      }
      else if (isThreeClicked === false && isThreeDisable === false) {
        return "reaction-button three";
      }
    }else if (buttonType === 'four'){
      if (isFourClicked === true) {
        return "reaction-button TwoClicked";
      } else if (isFourDisable === true ) {
        return "reaction-button disable";
      }
      else if (isFourClicked === false && isFourDisable === false) {
        return "reaction-button four";
      }
    }else if (buttonType === 'five'){
      if (isFiveClicked === true) {
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
  );
};

export default Reaction;
