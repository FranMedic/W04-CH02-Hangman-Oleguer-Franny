import PropTypes from "prop-types";

function HangmanPicture({ linesSVG, numberWrongLetters }) {
  const wrongLines = linesSVG.slice(0, numberWrongLetters);
  return wrongLines;
}
HangmanPicture.propTypes = {
  linesSVG: PropTypes.array.isRequired,
  numberWrongLetters: PropTypes.number.isRequired,
};
export default HangmanPicture;
