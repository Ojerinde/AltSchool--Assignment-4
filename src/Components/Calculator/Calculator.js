import { useState } from "react";

import Button from "../Button/Button";

import "./Calculator.scss";

// Conmponent
const Calculator = (props) => {
  const [expression, setExpression] = useState("");

  // Numbers and operators onClick handlers
  const clickHandler = (e) => {
    setExpression((prev) => {
      if (prev?.trim().length > 0) return (prev += e.target.value);
      else return e.target.value;
    });
  };

  // Assignment operator handler
  const submitHandler = () => {
    if (expression?.trim().length > 0) {
      try {
        // const result = Function("return" + expression)();
        const result = eval(expression);
        props.getData(expression + " = " + result);
        setExpression(`${result}`);
      } catch (error) {
        alert("Invalid expression");
      }
    }
  };

  // Clear field handler
  const clearHandler = () => {
    setExpression("");
  };

  return (
    <div className="calculator_box">
      <div className="calculator_display">
        <input
          value={expression}
          readOnly // To make input field read only
          type="text"
          className="input"
        />
      </div>
      <div className="calculator_row">
        <Button onClick={clickHandler} value="7" />
        <Button onClick={clickHandler} value="8" />
        <Button onClick={clickHandler} value="9" />
        <Button onClick={clearHandler} className="op_button" value="C" />
      </div>
      <div className="calculator_row">
        <Button onClick={clickHandler} value="4" />
        <Button onClick={clickHandler} value="5" />
        <Button onClick={clickHandler} value="6" />
        <Button onClick={clickHandler} value="-" />
      </div>
      <div className="calculator_row">
        <Button onClick={clickHandler} value="1" />
        <Button onClick={clickHandler} value="2" />
        <Button onClick={clickHandler} value="3" />
        <Button onClick={clickHandler} value="+" />
      </div>
      <div className="calculator_row">
        <Button onClick={clickHandler} value="0" />
        <Button onClick={clickHandler} value="*" />
        <Button onClick={clickHandler} value="/" />
        <Button onClick={submitHandler} className="op_button" value="=" />
      </div>
    </div>
  );
};
export default Calculator;
