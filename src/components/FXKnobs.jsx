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
      <div className="fx-knobs-container-1">
        <label className={"knob-label"}>Volume</label>
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
        ></Donut>
        <label className={"knob-label"}>Reverb</label>
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
        ></Donut>
      </div>

      <div className="fx-knobs-container-2">
        <label className={"knob-label"}>Delay</label>

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
        ></Donut>
        <label className={"knob-label"}>Distortion</label>

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
        ></Donut>
      </div>

      <div className="fx-knobs-container-3">
        <label className={"knob-label"}>Tremelo</label>

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
        ></Donut>
        <label className={"knob-label"}>Auto Filter</label>

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
        ></Donut>
      </div>
    </>
  );
};

export default FXKnobs;
