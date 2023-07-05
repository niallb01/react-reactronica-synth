const Keyboard = (props) => {
  const { notes, onPlayAudio, setNotes } = props;
  // when we click on note we make arr and it's storing data inside app
  const setNote = (note) => {
    // const notesArr = [
    //   "C3",
    //   "C#3",
    //   "D3",
    //   "D#3",
    //   "E3",
    //   "F3",
    //   "F#3",
    //   "G",
    //   "G#3",
    //   "A3",
    //   "A#3",
    //   "B3",
    //   "C4",
    // ];
    const notesArr = [];
    setNotes(notesArr);
    onPlayAudio();
  };

  return (
    <>
      <div className="keyboard-container">
        <ul className="synth-keys">
          <li
            className="white-key-li"
            value={notes}
            onKeyDown={() => setNote("C3")}
            // onKeyUp={!setNote}
          ></li>
          <li
            className="black-key-li"
            value={notes}
            onKeyDown={() => setNote("C#3")}
          ></li>
          <li
            className="white-key-li"
            value={notes}
            onKeyDown={() => setNote("D3")}
          ></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li"></li>
          <li className="black-key-li"></li>
          <li className="white-key-li-end"></li>
        </ul>
      </div>
    </>
  );
};

export default Keyboard;
