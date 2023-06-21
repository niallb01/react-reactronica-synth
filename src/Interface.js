// import React from "react";
// import { Song, Track, Instrument } from "reactronica";
// import "./App.css";
// import { useState } from "react";
// import Synth from "./components/Synth";

// const Interface = (props) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   // const { onPlayAudio } = props;

//   const onPlayAudio = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <div className="interface">
//         <Song isPlaying={isPlaying}>
//           <Track
//             steps={[
//               "D3",
//               null,
//               "F3",
//               "A3",
//               null,
//               "D4",
//               null,
//               "C5",
//               null,
//               null,
//               "D3",
//             ]}
//           >
//             <Instrument type="synth" />
//           </Track>
//         </Song>

//         <header className="app-header">
//           <h1>Reactronica Synth</h1>
//         </header>
//         <Synth />

//         {/* <Interface onPlayAudio={onPlayAudio} /> */}
//       </div>
//     </>
//   );
// };

// export default Interface;
