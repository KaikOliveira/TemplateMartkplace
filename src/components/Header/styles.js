import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    display: flex;
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }

    > img {
      width: 170px;
      height: 41px;

      @media (max-width: 768px) {
        width: 103px;
        height: 25px;
      }
    }
    > div {
      flex: 1;
      border-bottom: 1px solid #ccc;
      display: flex;
      height: 35px;
      max-width: 700px;
      @media (max-width: 768px) {
        max-width: none;
        width: 90%;
        height: 22px;
        align-items: center;
      }
      input {
        background: transparent;
        border: 0 none;
        color: #000;
        flex: 1;
        outline: none;

        &::placeholder {
          color: #000;
        }
      }
      img {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
    }
    button {
      align-items: center;
      background: transparent;
      border: 0 none;
      display: flex;
      padding: 10px;


      transition: all 0.3s ease-in;
      cursor: pointer;
      @media (max-width: 768px) {
        display: none;
      }

      &:hover {
        background-color: #e5e5e5;
        border-radius: 8px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
    aside {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        position: absolute;
        top: 15px;
        right: 20px;
      }

      img {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      div {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f8475f;
        margin-left: 9px;
        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: none;
        }
        span {
          color: #fff;
          margin: auto;
          font-size: 10px;
        }
      }
    }
  }
`;

export const HamburguerContainer = styled.img`
  display: none;
  width: 22px;
  height: 15px;
  position: absolute;
  top: 15px;
  left: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: flex;
  }
`;
