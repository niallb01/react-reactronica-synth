import { useState } from "react";
import { Donut } from "react-dial-knob";
import "../panel.css";

const FXKnobs = (props) => {
  const [volumeAmount, setVolumeAmount] = useState(0);
  const [reverbAmount, setReverbAmount] = useState(0);
  const [delayAmount, setDelayAmount] = useState(0);
  const [distortionAmount, setDistortionAmount] = useState(0);
  const [tremeloAmount, setTremeloAmount] = useState(0);
  const [autoFilterAmount, setAutoFilterAmount] = useState(0);

  return (
    <>
      <div className="knobs-container">
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={volumeAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setVolumeAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Volume</label>
        </Donut>
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

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={delayAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setDelayAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Delay</label>
        </Donut>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={distortionAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setDistortionAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Distortion</label>
        </Donut>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={tremeloAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setTremeloAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Tremelo</label>
        </Donut>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={autoFilterAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setAutoFilterAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Auto Filter</label>
        </Donut>
      </div>
    </>
  );
};

export default FXKnobs;
