import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";
import Envelope from "./Envelope";
import Tempo from "./Tempo";
import Sequencer from "./Sequencer";
import SequencerControls from "./SequencerControls";

const Synth = (props) => {
  // console.log(props, "synth component");
  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <Oscillators />
          <Engine />
          <FXKnobs
            volume={props.volume}
            setVolume={props.setVolume}
            reverb={props.reverb}
            setReverb={props.setReverb}
          />
          <Envelope />
          <Tempo />
          <Sequencer />
          <SequencerControls onPlayAudio={props.onPlayAudio} />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Synth;