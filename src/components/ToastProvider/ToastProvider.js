import React from "react";
export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const defaultVariant = VARIANT_OPTIONS[0];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(defaultVariant);
  const [toastInstances, setToastInstances] = React.useState([]);

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        selectedVariant,
        setSelectedVariant,
        toastInstances,
        setToastInstances,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
