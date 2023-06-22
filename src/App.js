import React from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import "./App.css";
import { useState } from "react";
import Synth from "./components/Synth";
// audio context - audio nodes - osc, filter, reverb, delay - can be sound modification objects - filter - reverb - compression
// nodes are objects - console log to see properties - when we create node we need to route it somewhere - speaker or another node before destination(speakers or other output)

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(-4);
  const [reverb, setReverb] = useState(0);
  const [delay, setDelay] = useState(0);
  const [distortion, setDistortion] = useState(0);
  const [tremelo, setTremelo] = useState(0);
  const [autoFilter, setAutoFilter] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  // const [sustain, setSustain] = useState(0);
  // const [release, setRelease] = useState(0);
  const [oscillatorType, setOscillatorType] = useState("sine");
  const [synthType, setSynthType] = useState("amSynth");
  const [pan, setPan] = useState(0);
  const [tempo, setTempo] = useState(60);

  const onPlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const onSelectOscType = () => {
    const changeOsc = [...oscillatorType];
    setOscillatorType(changeOsc);
  };

  // console.log(typeof oscillatorType);

  return (
    <div className="App">
      <Song isPlaying={isPlaying} bpm={tempo} volume={volume}>
        <Track
          steps={[
            "D3",
            null,
            "F3",
            "A3",
            null,
            "D4",
            null,
            "C5",
            null,
            null,
            "D3",
          ]}
        >
          <Instrument
            // type="synth"
            type={synthType}
            envelope={attack}
            // oscillator={oscillatorType}
            oscillator={oscillatorType}
          />

          <Effect type="freeverb" wet={reverb} />
          <Effect type="feedbackDelay" wet={delay} />
          <Effect type="distortion" wet={distortion} />
          <Effect type="tremelo" wet={tremelo} />
          <Effect type="autoFilter" wet={autoFilter} />
          <Effect type="autoPanner" wet={pan} />
        </Track>
      </Song>

      <Synth
        onPlayAudio={onPlayAudio}
        volume={volume}
        setVolume={setVolume}
        reverb={reverb}
        setReverb={setReverb}
        delay={delay}
        setDelay={setDelay}
        distortion={distortion}
        setDistortion={setDistortion}
        tremelo={tremelo}
        setTremelo={setTremelo}
        autoFilter={autoFilter}
        setAutoFilter={setAutoFilter}
        attack={attack}
        setAttack={setAttack}
        decay={decay}
        setDecay={setDecay}
        oscillatorType={oscillatorType}
        setOscillatorType={setOscillatorType}
        onSelectOscType={onSelectOscType}
        pan={pan}
        setPan={setPan}
        synthType={synthType}
        setSynthType={setSynthType}
        tempo={tempo}
        setTempo={setTempo}
      />
    </div>
  );
}
export default App;
