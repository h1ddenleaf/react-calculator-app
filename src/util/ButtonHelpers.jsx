export const addToEqn = (setContext, val) => {
  setContext((prevContext) => {
    const prev = prevContext.equation;
    const newEqn = prev === "0" ? val : prev + val;
    return { ...prevContext, equation: newEqn };
  });
};

export const setEqn = (setContext, val) => {
  setContext((prevContext) => ({ ...prevContext, equation: val }));
};

export const clearEqn = (setContext) => {
  setContext((prevContext) => ({ ...prevContext, equation: "0" }));
};

export const setNewEqn = (setContext, bool) => {
  setContext((prevContext) => ({ ...prevContext, newEqn: bool }));
};

export const addHistory = (setContext, historyString) => {
  setContext((prevContext) => ({
    ...prevContext,
    history: [...prevContext.history, historyString],
  }));
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
