import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";
import Envelope from "./Envelope";
import Tempo from "./Tempo";
import Sequencer from "./Sequencer";
import SequencerControls from "./SequencerControls";

const Synth = (props) => {
  console.log(props.oscillatorType, "synth component");
  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <Oscillators
            oscillatorType={props.oscillatorType}
            // setOcillatorType={props.setOscillatorType}
            onSelectOscType={props.onSelectOscType}
            // sine={props.sine}
            // setSine={props.setSine}
            // triangle={props.triangle}
            // setTriangle={props.setTriangle}
            // square={props.square}
            // setSquare={props.setSquare}
          />
          <Engine
            synthType={props.synthType}
            setSynthType={props.setSynthType}
          />
          <FXKnobs
            volume={props.volume}
            setVolume={props.setVolume}
            reverb={props.reverb}
            setReverb={props.setReverb}
            delay={props.delay}
            setDelay={props.setDelay}
            distortion={props.distortion}
            setDistortion={props.setDistortion}
            tremelo={props.tremelo}
            setTremelo={props.setTremelo}
            autoFilter={props.autoFilter}
            setAutoFilter={props.setAutoFilter}
          />
          <Envelope
            attack={props.attack}
            setAttack={props.setAttack}
            decay={props.decay}
            setDecay={props.setDecay}
          />
          <Tempo
            pan={props.pan}
            setPan={props.setPan}
            tempo={props.tempo}
            setTempo={props.setTempo}
          />
          <Sequencer />
          <SequencerControls onPlayAudio={props.onPlayAudio} />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Synth;
