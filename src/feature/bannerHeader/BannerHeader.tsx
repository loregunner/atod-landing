import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import React from "react";
import { WrapperBanner } from "./BannerHeader.style";

const BannerHeader = () => {
  return (
    <WrapperBanner>
      <Header />
      <Banner />
    </WrapperBanner>
  );
};

export default BannerHeader;
