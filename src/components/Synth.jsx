import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";
import Oscillators from "./Oscillators";
import Engine from "./Engine";
import Envelope from "./Envelope";
// import Tempo from "./Tempo";
import Sequencer from "./Sequencer";
import SequencerControls from "./SequencerControls";

const Synth = (props) => {
  // console.log(props);

  return (
    <>
      <div className="synth-container">
        <div className="front-panel">
          <Oscillators
            oscillatorType={props.oscillatorType}
            // setOcillatorType={props.setOscillatorType}
            onSelectOscType={props.onSelectOscType}
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
            autoWah={props.autoWah}
            setAutoWah={props.setAutoWah}
            panVol={props.panVol}
            setPanVol={props.setPanVol}
          />
          <Envelope
            attack={props.attack}
            setAttack={props.setAttack}
            decay={props.decay}
            setDecay={props.setDecay}
            sustain={props.sustain}
            setSustain={props.setSustain}
            release={props.release}
            setRelease={props.setRelease}
          />
          {/* <Tempo
            pan={props.pan}
            setPan={props.setPan}
            tempo={props.tempo}
            setTempo={props.setTempo}
          /> */}
          {/* <Sequencer />
            <SequencerControls
              onPlayAudio={props.onPlayAudio}
              steps={props.steps}
              setSteps={props.setSteps}
            /> */}
        </div>
        <Keyboard
          notes={props.notes}
          setNotes={props.setNotes}
          onPlayAudio={props.onPlayAudio}
          // setSynthSteps={props.setSynthSteps}
        />
      </div>
    </>
  );
};

export default Synth;
