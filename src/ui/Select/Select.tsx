import React from "react";
import { WrapperSelect } from "./Select.style";

interface ISelectProps {
  options: { value: string; label: string }[];
  value?: string;
  name?: string;
  label?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const Select: React.FC<ISelectProps> = ({
  options,
  value,
  name,
  label,
  onChange,
}) => {
  return (
    <WrapperSelect>
      {label && <label>{label}</label>}
      <select name={name} value={value} onChange={onChange}>
        <option value="">{"Seleccionar"}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </WrapperSelect>
  );
};
