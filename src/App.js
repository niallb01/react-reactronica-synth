import React from "react";
import { Song, Track, Instrument } from "reactronica";
import "./App.css";
import { useState } from "react";
import KeyboardAudio from "./components/KeyboardAudio";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song isPlaying={isPlaying}>
        <Track steps={["C3", "E3", "G3", null]}>
          <Instrument type="synth" />
        </Track>
      </Song>

      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? "Stop sound" : "Play sound"}
      </button>

      <KeyboardAudio />
    </div>
  );
}

export default App;
