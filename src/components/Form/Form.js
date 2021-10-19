import { act } from "@testing-library/react";
import PropTypes from "prop-types";
const Form = ({ buttonText, actionOnClick }) => {
  return (
    <>
      <form onSubmit={actionOnClick}>
        <input type="text" className="letter" />
        <input type="text" className="word" />
        <input type="submit" value={buttonText} className="submit" />
      </form>
    </>
  );
};

Form.propTypes = {
  buttonText: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Form;
