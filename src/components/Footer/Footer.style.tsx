import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: white;
  padding: 0 20px 0 20px;
  overflow: hidden;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding: 30px 400px 0 400px;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const NavItem = styled.div`
  cursor: pointer;
  transition: 0.2s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.hr`
  width: 55%;
  margin: 0 auto 30px auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 22%;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Text = styled.div`
  margin: 3px 0;
  font-size: 0.95rem;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: start;
  img {
    margin-right: 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.2s;
  img {
    font-size: 1.6rem;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  font-size: 0.85rem;
  margin-top: 30px;
  opacity: 0.75;
`;

export const GearLeft = styled.div`
  position: absolute;
  left: 0;
  top: 40%;
  transform: translateY(-50%);
  color: black;
  img {
    width: 360px !important;
  }
`;

export const GearRight = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  transform: translateY(-50%) scaleX(-1);
  img {
    width: 360px !important;
  }
`;
