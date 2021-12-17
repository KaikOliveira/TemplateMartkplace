import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100vw;
  height: 213px;
  display: flex;
  justify-content: center;
  background-color: #000;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 940px;
    height: 390px;
    margin-top: 32px;
  }

  section {
    display: flex;
    width: 1167px;
    justify-content: space-between;

    @media (max-width: 768px) {
      position: relative;
      justify-content: center;
      flex-direction: column;
    }

    div {
      b {
        color: #fff;
        font-size: 20px;
        font-weight: 700;

        @media (max-width: 768px) {
          margin-left: 16px;
        }
      }
      div {
        aside {
          width: 45px;
          height: 5px;
          background-color: #fff;
          margin-top: 20px;
          margin-bottom: 20px;

          @media (max-width: 768px) {
            margin-left: 16px;
          }
        }
      }
      address {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;

        @media (max-width: 768px) {
          margin-left: 16px;
        }
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 195px;
      height: 40px;
      border: 0 none;
      border-radius: 5px;
      cursor: pointer;

      @media (max-width: 768px) {
        margin: 0 auto;
      }
      &:nth-child(1) {
        margin-bottom: 25px;
        margin-top: 27px;
      }
      img {
        margin-right: 20px;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        justify-content: space-around;
        margin-top: 10px;
      }
      &.Direction_row {
        flex-direction: row;

        span {
          color: #fff;
          &.Creator {
            display: flex;
            flex-direction: column;
            justify-content: center;
            img {
              width: 72px;
              height: 18px;
              margin-right: 30px;
              &.Vtex {
                width: 53px;
                height: 19px;
              }
            }
          }
        }
      }
    }
  }
`;
