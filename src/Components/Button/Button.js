import "./Button.scss";

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
