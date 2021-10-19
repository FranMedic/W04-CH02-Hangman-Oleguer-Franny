function HangmanPicture({ linesSVG, numberWrongLetters }) {
  const wrongLines = linesSVG.slice(0, numberWrongLetters);
  return wrongLines;
}

export default HangmanPicture;
