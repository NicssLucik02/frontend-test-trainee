import { FaCheck, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import styles from "./toast.module.scss";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

type Props = {
  text?: string;
  type: "info" | "warning" | "success" | "reject";
  duration?: number;
};

export const Toast: React.FC<Props> = ({
  text = "Lorem, ipsum dolor, morun.",
  type,
  duration = 10000,
}: Props) => {
  const [isVisibleToast, setIsVisibleToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisibleToast(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisibleToast) {
    return null;
  }

  const handleCloseToast = () => {
    setIsVisibleToast(false);
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {type === "warning" && (
        <FaExclamationTriangle className={styles.toastIcon} />
      )}
      {type === "info" && <FaInfoCircle className={styles.toastIcon} />}
      {type === "success" && <FaCheck className={styles.toastIcon} />}
      {type === "reject" && <FiX className={styles.toastIcon} />}
      <p className={styles.toastText}>{text}</p>
      <FiX className={styles.toastCloseIcon} onClick={handleCloseToast} />
    </div>
  );
};
