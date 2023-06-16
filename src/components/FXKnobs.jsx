import { useState } from "react";
import { Silver, Donut } from "react-dial-knob";

const FXKnobs = (props) => {
  const [reverbAmount, setReverbAmount] = useState(0);
  return (
    <>
      <Donut
        diameter={30}
        min={0}
        max={100}
        step={1}
        value={reverbAmount}
        theme={{
          donutColor: "silver",
        }}
        onValueChange={setReverbAmount}
        ariaLabelledBy={"knob-label"}
      >
        <label className={"knob-label"}>Reverb</label>
      </Donut>
    </>
  );
};

export default FXKnobs;
