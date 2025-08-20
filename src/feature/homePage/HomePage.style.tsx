import styled from "styled-components";

export const ContainerATOD = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: unset;
  grid-gap: 16px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
  background: linear-gradient(
      180deg,
      rgba(18, 18, 18, 1) 13%,
      rgba(107, 107, 107, 1) 20%,
      rgba(239, 239, 239, 1) 68%
    ),
    url("/contact-decor.webp") center/cover no-repeat;
`;
