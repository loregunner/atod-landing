import { primaryGold } from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  input {
    padding: 10px 14px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;
    margin-bottom: 1rem;

    &:focus {
      border-color: ${primaryGold};
    }

    &::placeholder {
      color: #aaa;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 12px; /* distancia desde el borde derecho */
      width: 50px; /* tamaño del icono */
      height: 50px; /* tamaño del icono */
      background-image: url("/icon-arrow.svg"); /* tu icono */
      background-size: contain;
      background-repeat: no-repeat;
      transform: translateY(-50%);
      pointer-events: none; /* que no bloquee clicks */
    }
  }
`;
