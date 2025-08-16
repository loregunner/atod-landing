// src/app/components/Header.tsx
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="nav-link">
              Servicios
            </a>
          </li>

          <li className="logo-container">
            <img src="/logo.svg" alt="ATOD Garage" className="logo" />
          </li>

          <li>
            <a href="#nosotros" className="nav-link">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
