import Image from "next/image";
import Link from "next/link";
import { WrapperBanner } from "./Banner.style";
import Slider from "./ui-components/Slider/Slider";
import { LibsSVG } from "@/utils/libsSVG";
import Button from "@/ui/Button/Button";

const stats = [
  { src: LibsSVG.Car, alt: "Coche", value: "+1000", label: "Vehículos" },
  {
    src: LibsSVG.Manubrio,
    alt: "Manubrio",
    value: "+40",
    label: "Proveedores",
  },
  { src: LibsSVG.Juntos, alt: "Clientes", value: "+1000", label: "Clientes" },
  {
    src: LibsSVG.tools,
    alt: "Herramientas",
    value: "+2000",
    label: "Diagnósticos",
  },
];

export default function Banner() {
  return (
    <WrapperBanner id="inicio">
      <Image
        src="/contact-decor.webp"
        alt="Fondo decorativo"
        className="banner-background"
        fill
        priority
        style={{ objectFit: "scale-down" }}
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
          <Link href="#contacto">
            <Button size={"large"} color="primary" type={"button"}>
              <span>Agenda tu diagnóstico</span>
            </Button>
          </Link>
        </div>

        <div className="banner-center">
          <Image
            src="/car-top.webp"
            alt="Coche desde arriba"
            width={200}
            height={300}
          />
        </div>

        <div className="banner-right">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <Image src={stat.src} alt={stat.alt} width={68} height={68} />
              <p>{stat.label}</p>
              <p style={{ fontWeight: "bold" }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Slider />
    </WrapperBanner>
  );
}
