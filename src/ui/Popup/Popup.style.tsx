import styled from "styled-components";

export interface IModaltStyle {
  isactive: string;
}

export const WrapperPopup = styled.div<IModaltStyle>`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #0000008f;
  display: ${(props) => (props.isactive === "true" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    padding: 5px 0 5px 15px;
  }
  .container_button {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px 0 20px 0;
    button {
      margin-right: 10px;
      span {
        font-size: 15px;
        color: white;
      }
    }
  }
  .container_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container_modal {
    padding: 5px 8px;
    width: 400px;
    height: fit-content;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: white;
    img {
      cursor: pointer;
    }
    .header_title {
      font-size: 14px;
      margin-bottom: -10px;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    .header_modal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .imgAccept {
        margin-left: 12rem;
        margin-top: 1rem;
      }
    }
    .message {
      margin-bottom: 2rem;
    }
    button {
      height: 32px;
    }
  }
`;

export const Hr = styled.hr`
  width: 100%;
  background-color: #87868a1c;
`;
