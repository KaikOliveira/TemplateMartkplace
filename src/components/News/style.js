import styled from "styled-components";

export const NewsContainer = styled.section`
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    @media (max-width: 768px) {
      position: relative;
      top: 50px;
    }
    p {
      text-align: center;
      margin: 24px 0 16px 0;
      font-size: 22px;
      font-weight: 700;
    }

    span {
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        flex-direction: column;
      }
      input {
        width: 280px;
        height: 50px;
        border-radius: 5px;
        margin: 8px;
        border: 0 none;

        outline: none;

        @media (max-width: 768px) {
          width: 100vw;
        }
      }

      button {
        width: 140px;
        height: 48px;
        border-radius: 5px;
        border: 0 none;
        color: #fff;
        background-color: #000;
        margin-top: 8px;
        cursor: pointer;

        @media (max-width: 768px) {
        width: 100vw;
        }
      }
    }
  }
`;
