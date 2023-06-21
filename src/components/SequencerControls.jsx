// import { useState } from "react";
// import { Song, Track, Instrument, Effect } from "reactronica";

const SequencerControls = (props) => {
  const { onPlayAudio } = props;

  // console.log(props, "sequncer control componenr");

  return (
    <>
      {/* <Song isPlaying={isPlaying} bpm={130}>
        <Track
          // volume={volume}
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

      <div className="sequencer-btn-container">
        <button onClick={onPlayAudio} className="play-sequencer-btn">
          Play
        </button>
        <br />

        <select className="step-select" type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
      </div>
    </>
  );
};

export default SequencerControls;
