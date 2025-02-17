import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function VariantIcon({ icon: Icon }) {
  return <Icon size={24} />;
}

function Toast({ message, variant, handleClose }) {
  return (
    <div className={`${styles.toast} ${styles.notice} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon icon={ICONS_BY_VARIANT[variant]} size={24} />
        <VisuallyHidden>{variant} - </VisuallyHidden>
      </div>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
