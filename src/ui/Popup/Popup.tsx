import React from "react";

import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";
import { WrapperPopup } from "./Popup.style";
import Button from "../Button/Button";

interface Props {
  message: string;
  title: string;
  isActive: boolean;
  close?: boolean;
  disabled?: boolean;
  handleClose: () => void;
  accept: () => void;
}

const Popup = ({
  message,
  title,
  isActive,
  close,
  handleClose,
  accept,
  disabled,
}: Props) => {
  return (
    <WrapperPopup isactive={isActive.toString()} data-testid="popup_test">
      <div className="container_modal">
        <div className="header_modal">
          {message.includes("correctamente") ? (
            <Image
              src={LibsSVG.check}
              alt="accept"
              className="imgAccept"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={LibsSVG.error}
              alt="accept"
              className="imgAccept"
              width={30}
              height={30}
            />
          )}
          {!close && (
            <Image
              src={LibsSVG.close}
              alt="close"
              onClick={handleClose}
              width={30}
              height={30}
            />
          )}
        </div>
        <div className="container_body">
          <p className="header_title">{title}</p>
          <p className="message">{message}</p>
          <div className="container_button">
            <Button
              type="button"
              color="error"
              size="small"
              onActionButton={handleClose}>
              <span>Cancelar</span>
            </Button>
            <Button
              type="button"
              onActionButton={accept}
              disabled={disabled}
              color="primary"
              size="small">
              <span>Aceptar</span>
            </Button>
          </div>
        </div>
      </div>
    </WrapperPopup>
  );
};

export default Popup;
