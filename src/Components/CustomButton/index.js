import './CustomButton.scss';

const CustomButton = ({
  buttonType = "button__outlined",
  isDisabled = false,
  handleClick,
  text = "Click",
  customStyles = {},
}) => (
  <button
    disabled={isDisabled}
    style={customStyles}
    className={"button " + buttonType}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default CustomButton;
