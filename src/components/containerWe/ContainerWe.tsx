import React from "react";
import { WrapperWe } from "./ContainerWe.style";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";
import useMediaCustom from "@/hooks/useMediaCustom";

const ContainerWe = () => {
  const { isDesktop } = useMediaCustom();

  const optionsWe = [
    {
      title: "Quiénes somos",
      description:
        "Somos una empresa dedicada a crear soluciones innovadoras en mantenimiento de transmisiones automáticas.",
    },
    {
      title: "Misión",
      description:
        "Brindar servicios de alta calidad que garanticen la seguridad y el rendimiento de cada vehículo que atendemos.",
    },
    {
      title: "Visión",
      description:
        "Ser líderes en el sector automotriz, reconocidos por nuestra experiencia, innovación y confianza para el año 2030.",
    },
    {
      title: "Valores",
      description:
        "Compromiso, honestidad, innovación y trabajo en equipo son la base de todo lo que hacemos.",
    },
  ];

  return (
    <WrapperWe>
      <div className="content-title">
        <hr className="hr-left" />
        <h2>Nosotros</h2>
        <hr className="hr-right" />
      </div>
      <div className="container-internal">
        {isDesktop && (
          <div className="container-image">
            <Image src={LibsSVG.carWhite} alt={"car_container"} />
          </div>
        )}
        <div className="container-left">
          {!isDesktop && <Image src={LibsSVG.carWhite} alt={"car_container"} />}
          <p>
            En <span>ATOD Garage la caja automática</span> no es una parte más:
            es el <span>corazón eléctrico</span> de tu auto... y
            <span> nuestro escenario favorito.</span>
          </p>
        </div>
        <div className="container-rigth">
          {optionsWe.map((item, index) => (
            <div className="card_container" key={index}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperWe>
  );
};

export default ContainerWe;
