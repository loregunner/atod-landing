import { primaryBrown } from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperBanner = styled.section`
  margin-top: -2rem;
  .banner-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    z-index: 1;
    position: relative;
    z-index: 1;
  }
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 100px;
    margin-top: 10rem;
    background: url("/contact-decor.webp") no-repeat center center;
    background-size: cover;
    filter: grayscale(100%) brightness(0.9);
    transform: translate(-50%, -50%);
  }

  .banner-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 18px;
    margin-bottom: 2rem;
    z-index: 1;
  }

  .banner-left h2 {
    font-size: 26px;
    font-weight: bold;
    color: white;
  }

  .yellow {
    color: #e3b84c;
  }

  .banner-left p {
    color: white;
    font-size: 20px;
    font-style: normal;
    width: 100%;
  }

  .banner-left button {
    margin-top: 10px;
    width: 250px;
    padding: 12px 24px;
    border: none;
    background-color: black;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition: background 0.2s;
  }
  .banner-left button:hover {
    background-color: #e3b84c;
    color: #222;
  }

  .banner-center {
    display: none;
  }

  .banner-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    max-width: 400px;
    gap: 18px;
    z-index: 1;
  }

  .stat {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #00000061;
    color: #5b4a38;
    border-radius: 15px;
    padding: 15px;
    width: 132px;
    height: 180px;
    font-size: 1.1rem;
    gap: 6px;
    p {
      font-size: 14px;
    }
  }

  .fas {
    width: 40px;
  }

  @media (min-width: 508px) {
    .banner {
      width: 100%;
    }
    .banner-left {
      width: 100%;
      position: relative;
    }
    .banner-background {
      width: 100%;
      height: 300px;
      margin-top: 12rem;
    }

    .banner-content {
      flex-direction: row;
      padding: 30px 50px;
    }
    .banner-right {
      grid-template-columns: 1fr 1fr;
    }
    .stat {
      p {
        color: white;
      }
    }
  }
  @media (min-width: 1280px) {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .banner-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
    .banner-background {
      width: 50rem;
      background-size: cover;
    }
    .banner-content {
      flex-direction: row;
      padding: 30px 50px;
    }
    .banner-left {
      width: 55%;
      margin-top: 8rem;
      position: relative;
    }

    .banner-left h2 {
      position: absolute;
      top: 5rem;
      left: 0;
      z-index: 10;
      color: black;
      width: max-content;
    }
    .banner-left p {
      color: #5b4a38;
      font-size: 20px;
      font-style: normal;
      width: 140%;
    }
    .banner-center img {
      z-index: 5;
      width: 33rem;
      height: 40rem;
      margin-top: 9rem;
    }
    .banner-content {
      width: 80rem;
      height: 500px;
      max-height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 0;
    }
    .stat {
      width: 172px;
      height: 180px;
      p {
        font-size: 20px;
        color: ${primaryBrown};
      }
    }
  }
`;
