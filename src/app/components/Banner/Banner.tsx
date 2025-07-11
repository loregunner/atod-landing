import "./Banner.css";
import Slider from "./ui-components/Slider/Slider";

export default function Banner() {
  return (
    <section className="banner" id="inicio">
      <img
        src="/contact-decor.webp"
        alt="Fondo decorativo"
        className="banner-background"
      />
      <div className="banner-content">
        <div className="banner-left">
          <h2>
            Expertos en <br />
            <span className="yellow">Transmisiones Automáticas</span>
          </h2>
          <p>
            Ofrecemos un servicio de calidad especializado en transmisiones
            automáticas, brindándote la solución adecuada para el diagnóstico,
            mantenimiento o reparación de tu vehículo.
          </p>
          <button>Agenda tu diagnóstico</button>
        </div>

        <div className="banner-center">
          <img src="/car-top.webp" alt="Coche desde arriba" />
        </div>

        <div className="banner-right">
          <div className="stat">
            <img src="/car.svg" className="fas fa-car"></img>
            <p>+1000</p>
            <p>Vehículos</p>
          </div>
          <div className="stat">
            <img src="/Manubrio.svg" className="fas fa-handshake"></img>
            <p>+40</p>
            <p>Proveedores</p>
          </div>
          <div className="stat">
            <img src="/juntos.svg" className="fas fa-users"></img>
            <p>+1000</p>
            <p>Clientes</p>
          </div>
          <div className="stat">
            <img src="/tools.svg" className="fas fa-tools"></img>
            <p>+2000</p>
            <p>Diagnósticos</p>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}
