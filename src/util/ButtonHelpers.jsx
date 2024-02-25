export const addToEqn = (setState, val) => {
  setState((prevState) => {
    const prev = prevState.equation;
    const newEqn = prev === "0" ? val : prev + val;
    return { ...prevState, equation: newEqn };
  });
};

export const setEqn = (setState, val) => {
  setState((prevState) => ({ ...prevState, equation: val }));
};

export const clearEqn = (setState) => {
  setState((prevState) => ({ ...prevState, equation: "0" }));
};

export const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    "×": "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
    "(": "opt",
    ")": "opt",
    AC: "allclear",
    "%": "opt",
  };
  return className[btn];
};
