import React from "react";
import { Song, Track, Instrument } from "reactronica";
import "./App.css";
import { useState } from "react";
import Interface from "./components/Interface";
// audio context - audio nodes - osc, filter, reverb, delay - can be sound modification objects - filter - reverb - compression
// nodes are objects - console log to see properties - when we create node we need to route it somewhere - speaker or another node before destination(speakers or other output)

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const onPlayAudio = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className="App">
      {/* <Song isPlaying={isPlaying}>
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
          <Instrument type="synth" />
        </Track>
      </Song> */}

      <header className="app-header">
        <h1>Reactronica Synth</h1>
      </header>
      <Interface />

      {/* <Interface onPlayAudio={onPlayAudio} /> */}
    </div>
  );
}

export default App;
