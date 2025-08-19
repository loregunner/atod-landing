// src/app/page.tsx
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
    </>
  );
}
