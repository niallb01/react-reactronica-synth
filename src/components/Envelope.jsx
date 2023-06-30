import { Donut } from "react-dial-knob";
import "../panel.css";

// const { attack, setAttack, decay, setDecay } = props;
// console.log(props);

const Envelope = (props) => {
  return (
    <>
      <div className="envelope-container-1">
        <label className={"knob-label"}>Attack</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={props.attack}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={props.setAttack}
          ariaLabelledBy={"knob-label"}
        ></Donut>
        <label className={"knob-label"}>Decay</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={props.decay}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={props.setDecay}
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
          value={props.sustain}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={props.setSustain}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <label className={"knob-label"}>Release</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={props.release}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={props.setRelease}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>
    </>
  );
};

export default Envelope;
