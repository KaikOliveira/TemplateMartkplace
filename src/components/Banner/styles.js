import styled from "styled-components";
import backgroundimagemobile from "../../images/image_mobile.png";

export const Dots = styled.section`
  width: 70px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 27px;
  left: calc(50% - 35px);

  @media (max-width: 768px) {
    height: 7px;
  }
  aside {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bdbdbd;

    &:first-child {
      background-color: #f8475f;
    }
  }
`;

export const BannerContainer = styled.div`
  width: 100vw;
  height: 430px;
  position: relative;

  @media (max-width: 768px) {
    height: 192px;
  }
  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      background: url(${backgroundimagemobile}) no-repeat center;
    }
  }
  div {
    height: auto;
    width: 420px;
    position: absolute;
    top: 117px;
    left: 380px;

    @media (max-width: 768px) {
      width: 277px;
      height: 132px;
      top: 5px;
      left: 30px;
    }
    p {
      color: #fff;
      font-size: 30px;
      font-weight: 700;
      line-height: 10px;

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    strong {
      color: #fff;
      font-size: 45px;
      font-weight: 900;
      line-height: 50px;

      @media (max-width: 768px) {
        font-size: 35px;
        line-height: 30px;
      }
    }
  }
`;
