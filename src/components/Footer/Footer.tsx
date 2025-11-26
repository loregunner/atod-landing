import Image from "next/image";
import {
  FooterContainer,
  NavBar,
  NavItem,
  Logo,
  ContentWrapper,
  Section,
  SectionTitle,
  Text,
  SocialIcons,
  SocialIcon,
  BottomText,
  GearLeft,
  GearRight,
  Divider,
} from "./Footer.style";
import { LibsSVG } from "@/utils/libsSVG";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <GearLeft>
        <Image src={LibsSVG.engranaje} alt="Engranaje Izquierdo" />
      </GearLeft>
      <NavBar>
        <NavItem>
          <Link href="#inicio" className="nav-link">
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          {" "}
          <Link href="#servicios" className="nav-link">
            Servicios
          </Link>
        </NavItem>

        <Logo>
          <Image src={LibsSVG.Logo} alt="ATOD Garage" width={80} height={80} />
        </Logo>

        <NavItem>
          <Link href="#nosotros" className="nav-link">
            Nosotros
          </Link>
        </NavItem>
        <NavItem>
          {" "}
          <Link href="#contacto" className="nav-link">
            Agendar
          </Link>
        </NavItem>
      </NavBar>
      <Divider />
      <ContentWrapper>
        <Section>
          <SectionTitle>Horario de atención</SectionTitle>
          <Text>Lunes a Viernes : 8:00 am a 6:00 pm</Text>
          <Text>Sábados: 8:00 am a 1:00 pm</Text>
        </Section>

        <Section>
          <SectionTitle>Contacto</SectionTitle>
          <Text>
            <Image src={LibsSVG.phone} alt="phone" />
            <span>+57 3126273398</span>
          </Text>
          <Text>
            <Image src={LibsSVG.email} alt="email" />
            <span>atodgarage@gmail.com</span>
          </Text>
        </Section>

        <Section>
          <SectionTitle>Redes sociales</SectionTitle>
          <SocialIcons>
            <SocialIcon
              href="https://www.instagram.com/atodgarage/"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Image src={LibsSVG.instagram} alt="instagram" />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/atodgaragesas?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={LibsSVG.facebook} alt="facebook" />
            </SocialIcon>
            {/* <SocialIcon
              href="URL_COMPLETA_DE_TU_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer">
              <Image src={LibsSVG.linkedln} alt="linkedln" />
            </SocialIcon> */}
          </SocialIcons>
        </Section>
      </ContentWrapper>
      <BottomText>
        Todos los derechos reservados • NIT 901408948-8 • © ATOD Garage S.A.S
      </BottomText>
      <GearRight>
        <Image src={LibsSVG.engranaje} alt="Engranaje Derecho" />
      </GearRight>
    </FooterContainer>
  );
}
