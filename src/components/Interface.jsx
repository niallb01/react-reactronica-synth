import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";
import Envelope from "./Envelope";
import Tempo from "./Tempo";
import Sequencer from "./Sequencer";
import SequencerControls from "./SequencerControls";

const Interface = (props) => {
  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <Oscillators />
          <Engine />
          <FXKnobs />
          <Envelope />
          <Tempo />
          <Sequencer />
          {/* <SequencerControls onPlayAudio={props.onPlayAudio} /> */}
          <SequencerControls />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Interface;
