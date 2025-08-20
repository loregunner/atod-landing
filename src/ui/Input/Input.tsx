import React from "react";
import { WrapperInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <WrapperInput>
      {label && <label>{label}</label>}
      <input {...props} />
    </WrapperInput>
  );
};

export default Input;
