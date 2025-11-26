/* eslint-disable @typescript-eslint/no-redeclare */
import { TypesLibsSVG } from "./models";

import Logo from "../images/header/logo.svg"
import Car from "../images/banner/car.svg"
import Juntos from "../images/banner/Juntos.svg"
import Manubrio from "../images/banner/Manubrio.svg"
import tools from "../images/banner/tools.svg"
import carWhite from "../images/container/car_white.svg"
import engranaje from "../images/container/engranaje.svg"
import phone from "../images/container/phone.svg"
import email from "../images/container/email.svg"
import instagram from "../images/container/instagram.svg"
import facebook from "../images/container/facebook.png"
import linkedln from "../images/container/linkedln.png"
import error from "../images/popup/error.svg";
import check from "../images/popup/check.svg";
import close from "../images/popup/close.svg";

export const LibsSVG = {
  Logo,
  Car,
  Juntos,
  Manubrio,
  tools,
  carWhite,
  check,
  close,
  error,
  engranaje,
  phone,
  email,
  instagram,
  facebook,
  linkedln
};

export type TypesLibsSVG = keyof typeof LibsSVG;
