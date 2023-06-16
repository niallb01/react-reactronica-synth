import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";

const Synth = (props) => {
  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <FXKnobs />
          <Oscillators />
          <Engine />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Synth;
