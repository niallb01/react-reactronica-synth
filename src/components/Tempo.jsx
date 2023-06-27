import { Donut } from "react-dial-knob";
import "../panel.css";

const Tempo = (props) => {
  const { pan, setPan, tempo, setTempo } = props;

  return (
    <>
      <div className="tempo-container">
        <label className={"knob-label"}>Tempo</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={tempo}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setTempo}
          ariaLabelledBy={"knob-label"}
        ></Donut>

        <label className={"knob-label"}>Pan</label>
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={0.25}
          value={pan}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setPan}
          ariaLabelledBy={"knob-label"}
        ></Donut>
      </div>
    </>
  );
};

export default Tempo;
