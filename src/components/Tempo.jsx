import { useState } from "react";
import { Donut } from "react-dial-knob";
import "../panel.css";

const Tempo = (props) => {
  const [tempo, setTempo] = useState(0);
  const [panAmount, setPanAmount] = useState(0);

  return (
    <>
      <div className="tempo-container">
        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={tempo}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setTempo}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Tempo</label>
        </Donut>

        <Donut
          diameter={30}
          min={0}
          max={100}
          step={1}
          value={panAmount}
          theme={{
            donutColor: "silver",
          }}
          onValueChange={setPanAmount}
          ariaLabelledBy={"knob-label"}
        >
          <label className={"knob-label"}>Pan</label>
        </Donut>
      </div>
    </>
  );
};

export default Tempo;
