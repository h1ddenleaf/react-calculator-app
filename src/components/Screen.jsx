import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";
import History from "./History";
const Screen = () => {
  const { calc, setCalc } = useContext(CalcContext);

  return (
    <>
      <History eqnArr={calc.history} setCalc={setCalc} />
      <Textfit className="screen" max={70} mode="single">
        {calc.equation}
      </Textfit>
    </>
  );
};

export default Screen;
