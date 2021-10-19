import PropTypes from "prop-types";

const LetterBox = ({ letter, guessed }) => {
  return <li>{letter}</li>;
};
LetterBox.protoTypes = {
  letter: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired,
};

export default LetterBox;
