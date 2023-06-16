import Keyboard from "./Keyboard";
import FXKnobs from "./FXKnobs";

const Synth = (props) => {
  return (
    <>
      <div className="synth-container">
        <FXKnobs />
        <Keyboard />
      </div>
    </>
  );
};

export default Synth;
