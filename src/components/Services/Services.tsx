import { WrapperServicies } from "./Servicies.style";


const Services = () => {
  return (
    <WrapperServicies id="inicio">
      <div className="content-title">
        <hr className="hr-left" />
        <h2>Servicios</h2>
        <hr className="hr-right" />
      </div>
      <div className="content-services">
        <div className="service-item">
          <div className="service-image">
            <img src="/diagnostico.webp" alt="Diagnostico" />
          </div>
          <div className="content-title">
            <h3>Diagnostico</h3>
            <hr className="hr-right" />
          </div>
          <p>
            Realizamos diagnósticos precisos y detallados para identificar
            cualquier falla en tu caja automática. Utilizamos tecnología
            avanzada para detectar problemas rápidamente, lo que nos permite
            ofrecer soluciones efectivas y reducir los tiempos de reparación.
          </p>
        </div>
        <div className="service-item">
          <div className="service-image">
            <img src="/mantenimiento.webp" alt="Mantenimiento" />
          </div>
          <div className="content-title">
            <h3>Mantenimiento</h3>
            <hr className="hr-right" />
          </div>
          <p>
            Ofrecemos servicios de mantenimiento preventivo y correctivo para
            prolongar la vida útil de tu caja automática. Desde cambios de
            aceite hasta revisiones completas, nuestro equipo garantiza que tu
            transmisión funcione en óptimas condiciones y evites futuras
            averías.
          </p>
        </div>
        <div className="service-item">
          <div className="service-image">
            <img src="/reparacion.webp" alt="Reparación" />
          </div>
          <div className="content-title">
            <h3>Reparación</h3>
            <hr className="hr-right" />
          </div>
          <p>
            Nuestro equipo de expertos realiza reparaciones de alta calidad en
            cajas automáticas, restaurando su funcionalidad y rendimiento. Ya
            sea una reparación menor o una intervención mayor, ofrecemos
            soluciones duraderas y confiables para que vuelvas a conducir sin
            preocupaciones.
          </p>
        </div>
      </div>
    </WrapperServicies>
  );
}

export default Services;