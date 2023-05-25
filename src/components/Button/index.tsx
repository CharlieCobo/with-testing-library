import React from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  handleClick: (args: any) => any;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ handleClick, label }) => {
  return <ButtonStyled onClick={handleClick}>{label}</ButtonStyled>;
};
