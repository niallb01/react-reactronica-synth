import Key from "./Key";
// requirements - each key needs to track specific note, needs to track isPlaying (change color)
// create keys component and map over it? key needs <Key note='C3' />? - need onkeydown event listeners - useeffect?

const Keyboard = (props) => {
  // const { notes, setNotes, onPlayAudio } = props;
  const { notes, keysToNotes, setSynthSteps, onPlayAudio } = props;

  // when we clicck on note we make arr and it's storing data inside app
  const setNote = (note) => {
    const notesArr = ["C3"];
    setSynthSteps(notesArr);
    onPlayAudio();
  };

  // console.log(props);

  return (
    <>
      <div className="keyboard-container">
        <ul className="synth-keys">
          <li
            value={notes}
            className="white-key-li"
            onClick={() => setNote("C3")}
            // onKeyUp={!setNote}
          ></li>
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

        {/* <Key /> */}
      </div>
    </>
  );
};

export default Keyboard;
