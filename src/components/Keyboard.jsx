import { useState } from "react";
// requirements - each key needs to track specific note, w or b, needs to track isPlaying (change color)

const Keyboard = (props) => {
  return (
    <>
      <div className="keyboard-container">
        <ul className="synth-keys">
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
        </ul>
      </div>
    </>
  );
};

export default Keyboard;
