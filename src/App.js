import { useState } from "react";
import "./App.css";
import HangmanPicture from "./components/HangmanPicture/HangmanPicture";

function App() {
  const linesSVG = [
    <line class="stage11" x1="62" y1="70" x2="56" y2="56"></line>,
    <line class="stage10" x1="50" y1="70" x2="56" y2="56"></line>,
    <line class="stage9" x1="68" y1="46" x2="56" y2="40"></line>,
    <line class="stage8" x1="44" y1="46" x2="56" y2="40"></line>,
    <line class="stage7" x1="56" y1="40" x2="56" y2="56"></line>,
    <circle class="stage6" cx="56" cy="34" r="6" fill="#bee5eb"></circle>,
    <line class="stage5" x1="56" y1="16" x2="56" y2="28"></line>,
    <line class="stage4" x1="24" y1="24" x2="32" y2="16"></line>,
    <line class="stage3" x1="21" y1="16" x2="60" y2="16"></line>,
    <line class="stage2" x1="24" y1="80" x2="24" y2="16"></line>,
    <line class="stage1" x1="16" y1="80" x2="32" y2="80"></line>,
  ];

  const [wrongLetters, setWrongLetters] = useState(["A", "B"]);

  return (
    <>
      <div class="svg">
        <svg class="hangman" viewBox="0 0 96 96" width="300" height="300">
          <HangmanPicture linesSVG={linesSVG.slice(0, wrongLetters.length)} />
        </svg>
      </div>
    </>
  );
}

export default App;
