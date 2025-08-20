import styled from "styled-components";


export interface IButtonStyle {
    colorbutton: string;
    size: string;
  }

export const WrapperButton = styled.button<IButtonStyle>`
   width: ${(props) => props.size};
   height: 50px;
   border: none;
   cursor: pointer;
   border-radius: 5px;
   background-color: ${(props) => props.colorbutton};
   font-size: 14px;
   font-family: "Montserrat";
   margin: 0 5px;
   box-shadow: 0px 4px 4px 0px #00000040;
`;