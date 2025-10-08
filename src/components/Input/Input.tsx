import styles from "./input.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export type Props = {
  type?: "text" | "password" | "number";
  placeholder?: string;
  clearable?: boolean;
};

export const Input: React.FC<Props> = ({
  type = "text",
  placeholder = "enter text",
  clearable = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState("");

  const handleChangeVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClearInput = () => {
    setQuery("");
  };

  const inputType =
    type === "password" ? (isVisible ? "text" : "password") : type;

  return (
    <form>
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          className={styles.input}
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        {type === "password" && (
          <div onClick={handleChangeVisible} className={styles.inputIcon}>
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}

        {clearable && (
          <div onClick={handleClearInput} className={styles.inputIcon}>
            <FiX />
          </div>
        )}
      </div>
    </form>
  );
};
