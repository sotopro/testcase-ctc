import React from "react";

import styles from "./index.module.css";

export const Modal = ({ onClose, children }) => {
  return (
    <div
      className={styles.modalContainer}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader} onClick={() => onClose()}>
          <p className={styles.close}>&times;</p>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
