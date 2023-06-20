import { useState } from "react";
import { Donut } from "react-dial-knob";
import "../panel.css";

const Envelope = (props) => {
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0);

  return (
    <>
      <div className="envelope-container-1">
        <label className={"knob-label"}>Attack</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={attack}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setAttack}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Decay</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={decay}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setDecay}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>

      <div className="envelope-container-2">
        <label className={"knob-label"}>Sustain</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={sustain}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setSustain}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <label className={"knob-label"}>Release</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={release}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setRelease}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>
    </>
  );
};

export default Envelope;
