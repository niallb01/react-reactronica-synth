import { Donut, Silver } from "react-dial-knob";
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
    autoWah,
    setAutoWah,
    panVol,
    setPanVol,
  } = props;

  // console.log(props, "fx comp");
  return (
    <>
      <div className="fx-knobs-container-1">
        <label className={"knob-label"}>Volume</label>
        <Donut
          diameter={30}
          min={-5}
          max={10}
          step={0.25}
          value={volume}
          theme={{
            donutColor: "grey",
          }}
          onValueChange={setVolume}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <label className={"knob-label"}>Reverb</label>
        <Donut
          diameter={30}
          min={0}
          max={1}
          step={0.25}
          value={reverb}
          theme={{
            donutColor: "grey",
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
          max={1}
          step={0.25}
          value={delay}
          theme={{
            donutColor: "grey",
          }}
          onValueChange={setDelay}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Distortion</label>

        <Donut
          diameter={30}
          min={0}
          max={1}
          step={0.25}
          value={distortion}
          theme={{
            donutColor: "grey",
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
          max={1}
          step={0.25}
          value={tremelo}
          theme={{
            donutColor: "grey",
          }}
          onValueChange={setTremelo}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Auto Filter</label>

        <Donut
          diameter={30}
          min={0}
          max={1}
          step={0.25}
          value={autoFilter}
          theme={{
            donutColor: "grey",
          }}
          onValueChange={setAutoFilter}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <div className="fx-knobs-container-4">
          <label className={"knob-label"}>Auto Wah</label>
          <Donut
            diameter={30}
            min={0}
            max={1}
            step={0.25}
            value={autoWah}
            theme={{
              donutColor: "grey",
            }}
            onValueChange={setAutoWah}
            ariaLabelledBy={"knob-label"}
          ></Donut>
          <label className={"knob-label"}>Pan Vol</label>
          <Donut
            diameter={30}
            min={0}
            max={1}
            step={0.25}
            value={panVol}
            theme={{
              donutColor: "grey",
            }}
            onValueChange={setPanVol}
            ariaLabelledBy={"knob-label"}
          ></Donut>
        </div>
      </div>
    </>
  );
};

export default FXKnobs;
