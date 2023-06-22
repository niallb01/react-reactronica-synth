import "../panel.css";

const Engine = (props) => {
  const { synthType, setSynthType } = props;

  return (
    <>
      <div className="synth-engine-container">
        <p className="synth-engine-header">Engine</p>
        <label className="synth-engine-label" htmlFor="">
          amSynth
        </label>
        <input
          type="radio"
          value={synthType}
          onClick={() => setSynthType("amSynth")}
          name="engine-radio"
          label
        ></input>
        <label className="synth-engine-label" htmlFor="">
          fmSynth
        </label>
        <input
          type="radio"
          value={synthType}
          onClick={() => setSynthType("fmSynth")}
          // value={fmSynth}
          // onChange={setFmSynth}
          name="engine-radio"
        ></input>
        <label className="synth-engine-label" htmlFor="">
          duoSynth
        </label>
        <input
          type="radio"
          value={synthType}
          onClick={() => setSynthType("duoSynth")}
          // value={duoSynth}
          // onChange={setDuoSynth}
          name="engine-radio"
        ></input>
      </div>
    </>
  );
};

export default Engine;
