"use client";

import ContainerWe from "@/components/containerWe/ContainerWe";
import Form from "@/components/Form/Form";
import Services from "@/components/Services/Services";
import BannerHeader from "../bannerHeader/BannerHeader";
import { ContainerATOD } from "./HomePage.style";

export const HomePage = () => {
  return (
    <ContainerATOD>
      <div className="container-grid">
        <BannerHeader />
      </div>
      <div className="container-grid">
        <Services />
      </div>
      <div className="container-grid">
        <ContainerWe />
      </div>
      <div className="container-grid">
        <Form />
      </div>
    </ContainerATOD>
  );
};
