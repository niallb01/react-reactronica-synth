import React from "react";
import { Song, Track, Instrument } from "reactronica";
import "./App.css";
import { useState } from "react";
// import KeyboardAudio from "./components/KeyboardAudio";
import Interface from "./components/Interface";
import SequencerControls from "./components/SequencerControls";
// audio context - audio nodes - osc, filter, reverb, delay - can be sound modification objects - filter - reverb - compression
// nodes are objects - console log to see properties - when we create node we need to route it somewhere - speaker or another node before destination(speakers or other output)

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <Song isPlaying={isPlaying}>
        <Track
          steps={[
            "C3",
            null,
            "E3",
            "G3",
            null,
            "A4",
            null,
            "G5",
            null,
            null,
            "D3",
          ]}
        >
          <Instrument type="synth" />
        </Track>
      </Song>

      {/* <button
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? "Stop sound" : "Play sound"}
      </button> */}

      <Interface onPlayAudio={onPlayAudio} />
      {/* <SequencerControls onPlayAudio={onPlayAudio} /> */}
    </div>
  );
}

export default App;
