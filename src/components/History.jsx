import { useEffect, useRef, useState } from "react";
import { setNewEqn, setEqn } from "../util/ButtonHelpers";

const History = ({ eqnArr, setCalc }) => {
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!drop.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const eqnArrReverse = eqnArr.slice().reverse();
  return (
    <div ref={drop} className={open ? "dropdown open" : "dropdown closed"}>
      <Button onClick={() => setOpen(!open)} />
      <DropDown eqnArr={eqnArrReverse} setCalc={setCalc} setOpen={setOpen} />
    </div>
  );
};

const Button = ({ onClick }) => (
  <button onClick={onClick} className="history-button">
    History
  </button>
);

const DropDown = ({ eqnArr, setCalc, setOpen }) => {
  const handleClick = (e) => {
    setOpen(false);
    setEqn(setCalc, e.target.value);
    setNewEqn(setCalc, false);
  };
  return (
    <div className="dropdown-li">
      {eqnArr.map((item, i) => (
        <button
          className="list-item list-result"
          key={i}
          value={item}
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default History;
