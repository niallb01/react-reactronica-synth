import { useState } from "react";
import "../panel.css";

const Engine = (props) => {
  const [amSynth, setAmSynth] = useState();
  const [fmSynth, setFmSynth] = useState();
  const [duoSynth, setDuoSynth] = useState();

  return (
    <>
      <div className="synth-engine-container">
        <p className="synth-engine-header">Engine</p>
        <label className="synth-engine-label" htmlFor="">
          amSynth
        </label>
        <input
          type="radio"
          value={amSynth}
          onChange={setAmSynth}
          name="engine-radio"
          label
        ></input>
        <label className="synth-engine-label" htmlFor="">
          fmSynth
        </label>
        <input
          type="radio"
          value={fmSynth}
          onChange={setFmSynth}
          name="engine-radio"
        ></input>
        <label className="synth-engine-label" htmlFor="">
          duoSynth
        </label>
        <input
          type="radio"
          value={duoSynth}
          onChange={setDuoSynth}
          name="engine-radio"
        ></input>
      </div>
    </>
  );
};

export default Engine;
