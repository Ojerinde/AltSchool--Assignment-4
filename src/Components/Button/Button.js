import "./Button.scss";

// Component that can receives additional styles where it is being used.
const Button = (props) => {
  return (
    <button
      value={props.value}
      onClick={props.onClick}
      className={`${props.className} button` }
    >
      {props.value}
    </button>
  );
};
export default Button;
