import styled from "styled-components";

export const ContainerATOD = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: unset;
  column-gap: 16px;
  row-gap: 0;
  scrollbar-width: none;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    column-gap: 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 32px;
  }

  .container-grid {
    grid-column: 1 / 7;
    width: 100%;
    @media (min-width: 508px) {
      grid-column: 1 / 9;
    }
    @media (min-width: 1280px) {
      grid-column: 1 / 13;
      width: 100%;
    }
  }
`;
