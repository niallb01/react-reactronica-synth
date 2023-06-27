import "../panel.css";

const Oscillators = (props) => {
  const { oscillatorType, onSelectOscType } = props;

  // console.log("osc comp", props);
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
          // onChange={onSelectOscType}
          onClick={() => onSelectOscType("sine")}
          // onClick={setOscillatorType}
          name="osc-radio"
          label
        ></input>
        <label className="oscillators-label" htmlFor="">
          Triangle
        </label>
        <input
          type="radio"
          value={oscillatorType}
          // onClick={() => setOscillatorType("triangle")}
          onClick={() => onSelectOscType("triangle")}
          // onClick={() => setOscillatorType("triangle")}
          // onChange={onSelectOscType}
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
          // onClick={setOscillatorType}
          onClick={() => onSelectOscType("sine")}
          // onClick={() => setOscillatorType("square")}
          // onChange={onSelectOscType}
          // value={square}
          // onChange={setSquare}
          name="osc-radio"
        ></input>
      </div>
    </>
  );
};

export default Oscillators;
