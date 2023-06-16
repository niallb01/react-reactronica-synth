import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";
import Envelope from "./Envelope";
import Tempo from "./Tempo";
import Sequencer from "./Sequencer";

const Synth = (props) => {
  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <FXKnobs />
          <Oscillators />
          <Envelope />
          <Engine />
          <Tempo />
          <Sequencer />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Synth;
