import React from "react";

export default function useEscapeKey(func) {
  const escFunction = React.useCallback(
    (event) => {
      func(event);
    },
    [func]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
}
