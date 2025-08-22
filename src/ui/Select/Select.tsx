import React from "react";
import { WrapperSelect } from "./Select.style";

interface ISelectProps {
  options: { value: string; label: string }[];
  value?: string;
  name?: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<ISelectProps> = ({
  options,
  value,
  name,
  label,
  error,
  onChange,
}) => {
  return (
    <WrapperSelect>
      {label && <label>{label}</label>}
      <div className="select-container">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}>
          <option value="">Seleccionar</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="error-message">{error}</span>}
    </WrapperSelect>
  );
};
