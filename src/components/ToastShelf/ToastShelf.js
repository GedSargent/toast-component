import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ setToastInstances, toastInstances }) {
  return (
    <ol className={styles.wrapper}>
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
