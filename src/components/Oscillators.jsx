import { useState } from "react";
import "../panel.css";

const Oscillators = (props) => {
  // const [sine, setSine] = useState();
  // const [triangle, setTriangle] = useState();
  // const [square, setSquare] = useState();

  const { oscillatorType, onSelectOscType } = props;

  return (
    <>
      <div className="oscillators-container">
        <p className="oscillators-header">Oscillator</p>
        <label className="oscillators-label" htmlFor="">
          Sine
        </label>
        <input
          type="radio"
          value={oscillatorType}
          onChange={onSelectOscType}
          name="osc-radio"
          label
        ></input>
        <label className="oscillators-label" htmlFor="">
          Triangle
        </label>
        <input
          type="radio"
          value={oscillatorType}
          onChange={onSelectOscType}
          // value={triangle}
          // onChange={setTriangle}
          name="osc-radio"
        ></input>
        <label className="oscillators-label" htmlFor="">
          Square
        </label>
        <input
          type="radio"
          value={oscillatorType}
          onChange={onSelectOscType}
          // value={square}
          // onChange={setSquare}
          name="osc-radio"
        ></input>
      </div>
    </>
  );
};

export default Oscillators;
