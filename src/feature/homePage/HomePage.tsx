"use client";

import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import React from "react";
import { ContainerATOD } from "./HomePage.style";
import Services from "@/components/Services/Services";
import ContainerWe from "@/components/containerWe/ContainerWe";

export const HomePage = () => {
  return (
    <>
      <ContainerATOD>
        <Header />
        <Banner />
      </ContainerATOD>
      <Services />
      <ContainerWe />
    </>
  );
};
