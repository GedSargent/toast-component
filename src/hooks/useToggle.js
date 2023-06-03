import React from "react";

function useToggle(initialState = false) {
  if (typeof initialState !== "boolean") {
    console.warn("useToggle should only be passed a boolean value");
  }

  const [toggle, setToggle] = React.useState(initialState);

  const toggleValue = () => {
    // Note we use the callback vesion of setToggle to ensure we always have the most recent state value
    setToggle((currentToggle) => !currentToggle);
  };

  return [toggle, toggleValue];
}

export default useToggle;
