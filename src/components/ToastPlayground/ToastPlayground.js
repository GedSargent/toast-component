import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const defaultVariant = VARIANT_OPTIONS[0];
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(defaultVariant);
  const [toastInstances, setToastInstances] = React.useState([]);

  const addToastInstance = () => {
    const nextToastInstances = [
      ...toastInstances,
      {
        id: crypto.randomUUID(),
        message,
        variant: selectedVariant,
        handleClose: () => {
          const nextToastInstances = toastInstances.filter(({ id }) => {
            return id !== this.id;
          });

          setToastInstances(nextToastInstances);
        },
      },
    ];

    setToastInstances(nextToastInstances);
    setMessage("");
    setSelectedVariant(defaultVariant);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastInstances.length > 0 && (
        <ToastShelf
          setToastInstances={setToastInstances}
          toastInstances={toastInstances}
        />
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addToastInstance();
        }}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === "Enter" && event.shiftKey === false) {
                  event.preventDefault();
                  addToastInstance();
                }
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((currentVariant) => {
              const id = `variant-${currentVariant}`;

              return (
                <label key={currentVariant} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={currentVariant}
                    checked={selectedVariant === currentVariant}
                    onChange={(event) => setSelectedVariant(event.target.value)}
                  />
                  {currentVariant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
