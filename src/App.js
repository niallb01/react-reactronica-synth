import React from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import "./App.css";
import { useState } from "react";
import Synth from "./components/Synth";
// audio context - audio nodes - osc, filter, reverb, delay - can be sound modification objects - filter - reverb - compression
// nodes are objects - console log to see properties - when we create node we need to route it somewhere - speaker or another node before destination(speakers or other output)

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(5);
  const [reverb, setReverb] = useState(0);
  const [delay, setDelay] = useState(0);
  const [distortion, setDistortion] = useState(0);
  const [tremelo, setTremelo] = useState(0);
  const [autoFilter, setAutoFilter] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0);
  const [autoWah, setAutoWah] = useState(0);
  const [bitcrusher, setBitcrusher] = useState(0);
  const [oscillatorType, setOscillatorType] = useState("sine");
  const [synthType, setSynthType] = useState("amSynth");
  const [pan, setPan] = useState(0);
  const [tempo, setTempo] = useState(80);
  const [notes, setNotes] = useState([
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
  ]);

  const envelope = [attack, decay, sustain, release];

  const onPlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const onSelectOscType = () => {
    // const changeOsc = [...oscillatorType];
    setOscillatorType();
  };

  //setTimeout begins when key goes down, if no keydown stop
  const onKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "a") {
      const notesArr = ["C3"];
      setNotes(notesArr);
      onPlayAudio();
      if (onKeyUp) {
        setTimeout(() => {
          onPlayAudio();
        }, 4000);
      }
    }

    // const onKeyUp = (e) => {
    //   onPlayAudio();
    // };

    // const onKeyDown = (e) => {
    //   console.log(e.key);
    //   if (e.key === "a") {
    //     const notesArr = ["C3"];
    //     setNotes(notesArr);
    //     setTimeout(() => {
    //       onPlayAudio();
    //     }, 1000);
    //   }

    if (e.key === "w") {
      const notesArr = ["D#3"];
      setNotes(notesArr);
      onPlayAudio();
      // if (onKeyUp) {
      //   setTimeout(() => {
      //     onPlayAudio();
      //   }, 100);
      // }
    }

    if (e.key === "s") {
      const notesArr = ["D3"];
      setNotes(notesArr);
      onPlayAudio();
      // if (onKeyUp) {
      //   setTimeout(() => {
      //     onPlayAudio();
      //   }, 100);
      // }
    }
  };
  const onKeyUp = (e) => {
    onPlayAudio();
  };

  return (
    <div className="App" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      <Song isPlaying={isPlaying} bpm={tempo} volume={volume} notes={notes}>
        <Track
          steps={[{ name: notes, duration: 0.2, velocity: 0.4 }]}
          pan={pan}
        >
          {/* <Track steps={[{ name: notes, duration: 0.1, velocity: 0.5 }]}> */}

          <Instrument
            type={synthType}
            oscillator={oscillatorType}
            envelope={[
              {
                attack: attack,
                decay: decay,
                sustain: sustain,
                release: release,
              },
            ]}
            // notes={notes}
          />

          <Effect type="freeverb" wet={reverb} />
          <Effect type="feedbackDelay" wet={delay} />
          <Effect type="distortion" wet={distortion} />
          <Effect type="tremelo" wet={tremelo} />
          <Effect type="autoFilter" wet={autoFilter} />
          <Effect type="autoWah" wet={autoWah} />
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
        autoWah={autoWah}
        setAutoWah={setAutoWah}
        attack={attack}
        setAttack={setAttack}
        decay={decay}
        setDecay={setDecay}
        sustain={sustain}
        setSustain={setSustain}
        release={release}
        setRelease={setRelease}
        oscillatorType={oscillatorType}
        setOscillatorType={setOscillatorType}
        onSelectOscType={onSelectOscType}
        pan={pan}
        setPan={setPan}
        synthType={synthType}
        setSynthType={setSynthType}
        tempo={tempo}
        setTempo={setTempo}
        notes={notes}
        setNotes={setNotes}

        // setSynthSteps={setSynthSteps}
      />
    </div>
  );
}
export default App;
