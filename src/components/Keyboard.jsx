// requirements - each key needs to track specific note, w or b, needs to track isPlaying (change color)
const Keyboard = (props) => {
  const { notes, setNotes, onPlayAudio } = props;

  console.log(props);

  return (
    <>
      <div className="keyboard-container">
        <ul className="synth-keys">
          <li
            value={notes}
            className="white-key-li"
            // onClick={() => setNotes({ name: "C3" })}
            // onKeyDown={onPlayAudio}
            // onKeyUp={!onPlayAudio}
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
      </div>
    </>
  );
};

export default Keyboard;
