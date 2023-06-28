const Key = (props) => {
  const { notes, setNotes, onPlayAudio } = props;
  console.log("key component", props);
  return (
    <>
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
    </>
  );
};

export default Key;
