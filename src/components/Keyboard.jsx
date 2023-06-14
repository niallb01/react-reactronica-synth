import { useState } from "react";
import { Silver } from "react-dial-knob";

const Keyboard = (props) => {
  const [reverbValue, setReverbValue] = useState(0);

  return (
    <>
      <Silver
        // className="dial-knob"
        diameter={200}
        min={0}
        max={100}
        step={1}
        value={reverbValue}
        theme={{
          donutColor: "blue",
          //   width: "30px",
        }}
        onValueChange={setReverbValue}
        ariaLabelledBy={"my-label"}
      >
        <label id={"my-label"}>Reverb</label>
      </Silver>

      <div className="keyboard-container">
        <ul className="synth-keys">
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
