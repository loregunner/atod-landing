"use client";

import ContainerWe from "@/components/containerWe/ContainerWe";
import Form from "@/components/Form/Form";
import Services from "@/components/Services/Services";
import BannerHeader from "../bannerHeader/BannerHeader";
import { ContainerATOD } from "./HomePage.style";
import Map from "@/components/Map/Map";
import Footer from "@/components/Footer/Footer";

export const HomePage = () => {
  return (
    <ContainerATOD>
      <div id="inicio" className="container-grid">
        <BannerHeader />
      </div>

      <div id="servicios" className="container-grid">
        <Services />
      </div>

      <div id="nosotros" className="container-grid">
        <ContainerWe />
      </div>

      <div id="contacto" className="container-grid">
        <Form />
      </div>

      <div className="container-grid">
        <Map />
      </div>

      <div id="footer" className="container-grid">
        <Footer />
      </div>
    </ContainerATOD>
  );
};
