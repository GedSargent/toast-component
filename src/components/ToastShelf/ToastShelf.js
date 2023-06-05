import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ setToastInstances, toastInstances }) {
  React.useEffect(() => {
    const clearToastShelf = (event) => {
      if (event.key === "Escape") {
        setToastInstances([]);
      }
    };

    document.addEventListener("keydown", clearToastShelf, false);

    return () => {
      document.removeEventListener("keydown", clearToastShelf, false);
    };
  }, [setToastInstances]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastInstances.map(({ id, message, variant }) => {
        const handleClose = () => {
          const nextToastInstances = toastInstances.filter(
            ({ id: idToClose }) => {
              return id !== idToClose;
            }
          );

          setToastInstances(nextToastInstances);
        };

        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              variant={variant}
              message={message}
              handleClose={handleClose}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
