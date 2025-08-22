/* eslint-disable @typescript-eslint/no-redeclare */
import { TypesLibsSVG } from "./models";

import Logo from "../images/header/logo.svg"
import Car from "../images/banner/car.svg"
import Juntos from "../images/banner/Juntos.svg"
import Manubrio from "../images/banner/Manubrio.svg"
import tools from "../images/banner/tools.svg"
import carWhite from "../images/container/car_white.svg"
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
  error
};

export type TypesLibsSVG = keyof typeof LibsSVG;
