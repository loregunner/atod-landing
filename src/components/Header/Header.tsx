import Image from "next/image";
import Link from "next/link";
import { WrapperHeader } from "./Header.style";
import { LibsSVG } from "@/utils/libsSVG";

const Header = () => {
  return (
    <WrapperHeader>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link href="#inicio" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#servicios" className="nav-link">
              Servicios
            </Link>
          </li>
          <Image src={LibsSVG.Logo} alt="ATOD Garage" className="logo" />
          <li>
            <Link href="#nosotros" className="nav-link">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </WrapperHeader>
  );
};

export default Header;
