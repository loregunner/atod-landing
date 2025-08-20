import styled from "styled-components";

export const WrapperServicies = styled.div`
  background-color: #000000;
  color: #f5f5f5;
  .services-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .content-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  .content-title h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .content-title h3 {
    font-size: 32px;
    font-weight: 600;
  }

  .hr-right {
    width: 100%;
    border: 1px solid #f5f5f5;
    margin-left: 10px;
  }

  .hr-left {
    width: 200px;
    border: 1px solid #f5f5f5;
    margin-right: 10px;
  }

  .service-item {
    width: 100%;
  }

  .content-services img {
    width: 100%;
  }

  .content-services {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    gap: 30px;
    width: fit-content;
  }

  p {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    .content-services {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
    .service-item {
      width: 500px;
    }
  }
  @media (min-width: 1280px) {
    .content-services {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 50px;
    }
    .service-item {
      max-width: 400px;
    }
  }
`;
