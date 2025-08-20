import styled from "styled-components";

export const WrapperForm = styled.section`
padding-bottom: 2rem;
  .content-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  .hr-left {
    width: 100%;
    border: 1px solid black;
    margin-left: 10px;
  }

  .hr-right {
    width: 200px;
    border: 1px solid black;
    margin-right: 10px;
  }

  .content-title h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .container-form {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px 32px;
    width: 100%;
    max-width: 800px;
    padding: 0 2rem;
    align-items: start;

    p {
      grid-column: 1 / -1;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
      flex-shrink: 0;
    }

    input,
    select {
      width: 100%;
    }
  }
  .MuiFormLabel-root {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  .switch-wrapper {
    margin: 2rem 0 0 1px;
  }
  button {
    place-self: end;
    span {
      font-size: 16px;
      color: white;
    }
  }
  .banner-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 100px;
    margin-top: 20rem;
    background: url("/contact-decor.webp") no-repeat center center;
    background-size: cover;
    filter: grayscale(100%) brightness(0.9);
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    form {
      grid-template-columns: 1fr 1fr;
      gap: 16px 24px;
      padding: 0 4rem;
    }

    .banner-background {
      width: 100%;
      height: 300px;
      margin-top: 15rem;
    }
  }

  @media (min-width: 1280px) {
    form {
      width: 100%;
      max-width: 100%;
      gap: 16px 32px;
      padding: 0 3rem;
    }

    .banner-background {
      width: 50rem;
      background-size: cover;
      margin-top: 30rem;
    }
  }

  @media (min-width: 1500px) {
    form {
      width: 80%;
      max-width: 76%;
    }
  }
`;
