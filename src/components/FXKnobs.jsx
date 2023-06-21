// import { useState } from "react";
import { Donut } from "react-dial-knob";
import "../panel.css";

const FXKnobs = (props) => {
  const {
    volume,
    setVolume,
    reverb,
    setReverb,
    delay,
    setDelay,
    distortion,
    setDistortion,
    tremelo,
    setTremelo,
    autoFilter,
    setAutoFilter,
  } = props;

  // console.log(props, "fx comp");
  return (
    <>
      <div className="fx-knobs-container-1">
        <label className={"knob-label"}>Volume</label>
        <Donut
          diameter={30}
          min={-50}
          max={10}
          step={1}
          value={volume}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setVolume}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <label className={"knob-label"}>Reverb</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={reverb}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setReverb}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>

      <div className="fx-knobs-container-2">
        <label className={"knob-label"}>Delay</label>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={delay}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setDelay}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Distortion</label>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={distortion}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setDistortion}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>

      <div className="fx-knobs-container-3">
        <label className={"knob-label"}>Tremelo</label>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={tremelo}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setTremelo}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Auto Filter</label>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={autoFilter}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setAutoFilter}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>
    </>
  );
};

export default FXKnobs;
