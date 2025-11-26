import React from "react";
import { WrapperInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  error?: string; 
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <WrapperInput>
      {label && <label>{label}</label>}
      <input
        {...props}
        className={error ? "input-error" : ""}
      />
      {error && <span className="error_input">{error}</span>}
    </WrapperInput>
  );
};

export default Input;
