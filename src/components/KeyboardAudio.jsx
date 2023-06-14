import { Song, Track, Instrument } from "reactronica";
import { useState } from "react";
import Keyboard from "./Keyboard";

const KeyboardAudio = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Keyboard
        onMouseDown={(notes) => setNotes(notes)}
        onMouseUp={() => setNotes([])}
      />
      <Song>
        <Track>
          <Instrument type="synth" notes={notes} />
        </Track>
      </Song>
    </>
  );
};

export default KeyboardAudio;
