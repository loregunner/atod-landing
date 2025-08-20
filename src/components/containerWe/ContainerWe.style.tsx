import { primaryGold } from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperWe = styled.div`
  background-color: #000000;
  color: #f5f5f5;
  .content-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }
  .hr-left {
    width: 100%;
    border: 1px solid #f5f5f5;
    margin-left: 10px;
  }

  .hr-right {
    width: 200px;
    border: 1px solid #f5f5f5;
    margin-right: 10px;
  }

  .content-title h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .container-internal {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 8rem;
    align-items: center;
    padding: 2rem 0;
  }

  .container-left {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-left img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 25%;
  }

  .container-left p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
  }

  .container-left p span {
    color: ${primaryGold};
    font-weight: 500;
  }

  .container-rigth {
    display: grid;
    margin: 0 2rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card_container {
    background: rgba(196, 196, 196, 0.75);
    border-radius: 1rem;
    padding: 2rem 1rem;
    color: white;
    text-align: left;
    transition: transform 0.2s ease, background 0.3s ease;
  }

  .card_container span {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .card_container:hover {
    transform: translateY(-5px);
    background: #3a3a3a;
  }

  @media (min-width: 768px) {
    .container-internal {
      grid-template-columns: 1fr;
    }
    .container-left p {
      padding: 0 5rem;
    }
    .container-rigth {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .card_container {
      padding: 1 5rem;
    }
  }
  @media (min-width: 1280px) {
    .container-internal {
      grid-template-columns: 1fr 1fr;
    }
    .container-left p {
      padding: 3rem 0 0 12rem;
      font-size: 40px;
    }
    .container-rigth {
      padding: 3rem 8rem 0 0;
    }
    .container-left img {
      width: 500%;
      height: auto;
      object-fit: cover;
      opacity: 25%;
    }
  }
`;
