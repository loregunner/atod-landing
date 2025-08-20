import { primaryGold } from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperHeader = styled.header`
  grid-column: 1 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  z-index: 100;
  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-height: 3rem;
  }

  .logo {
    width: 3rem;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .nav-link:hover {
    color: ${primaryGold};
  }

  @media (min-width: 768px) {
    grid-column: 1 / 9;
    .logo {
      width: 5rem;
    }
    .nav-list {
      gap: 3rem;
    }
  }
  @media (min-width: 1280px) {
    grid-column: 1 / 13;
    font-size: 20px;
  }
`;
