// Select.style.ts
import styled from "styled-components";

export const WrapperSelect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 6px;
    font-weight: 500;
  }

  select {
    width: 100%;
    padding: 10px 40px 10px 12px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 10px;
    appearance: none;
    background-color: #fff;
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    top: 70%;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #000;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
