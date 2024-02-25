import { evaluate } from "mathjs";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import {
  setEqn,
  clearEqn,
  addToEqn,
  getStyleName,
} from "../util/ButtonHelpers";

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const handleBasicClick = () => {
    addToEqn(setCalc, value.toString());
  };

  const handleClearClick = () => {
    clearEqn(setCalc);
  };

  const formatEquation = (eqn) => {
    return eqn
      .replaceAll("%", "*0.01")
      .replaceAll("×", "*")
      .replaceAll("÷", "/");
  };
  const handleEqualsClick = () => {
    let val = null;
    try {
      val = evaluate(formatEquation(calc.equation));
    } catch (e) {
      return;
    }
    if (val != null) {
      let valStr = val.toString();
      if (valStr.length > 10) valStr = val.toPrecision(8).toString();
      setEqn(setCalc, valStr);
    }
  };

  const handleBtnClick = () => {
    const options = {
      AC: handleClearClick,
      "=": handleEqualsClick,
    };
    if (options[value]) {
      return options[value]();
    } else {
      return handleBasicClick();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
