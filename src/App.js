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

  const onPlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <Song isPlaying={isPlaying} volume={volume}>
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
          <Effect type="freeverb" wet={reverb} />
        </Track>
      </Song>

      <Synth
        onPlayAudio={onPlayAudio}
        volume={volume}
        setVolume={setVolume}
        reverb={reverb}
        setReverb={setReverb}
      />
    </div>
  );
}

export default App;
