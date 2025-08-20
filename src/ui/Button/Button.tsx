import React from "react";
import {
  error500,
  gray01,
  gray80,
} from "@/utils/constants.style";
import { WrapperButton } from "./Button.style";

export interface IButton {
  children: React.ReactNode;
  size: "small" | "large" | "extralarge" | "fluid";
  color:
    | "primary"
    | "secondary"
    | "disabled"
    | "none"
    | "error";
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onActionButton?: () => void;
}

const Button = ({
  color,
  size,
  children,
  type,
  disabled,
  onActionButton,
}: IButton) => {
  const buttonColor = {
    primary: "black",
    secondary: gray80,
    error: error500,
    disabled: gray01,
    none: "transparent",
  };

  const buttonSize = {
    small: "102px",
    large: "136px",
    extralarge: "165px",
    fluid: "100%",
  };

  return (
    <WrapperButton
      colorbutton={disabled ? buttonColor["disabled"] : buttonColor[color]}
      size={buttonSize[size]}
      type={type}
      disabled={disabled}
      onClick={onActionButton}
      data-testid="button_test">
      {children}
    </WrapperButton>
  );
};

export default Button;
