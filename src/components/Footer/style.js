import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100vw;
  height: 213px;
  display: flex;
  justify-content: center;
  background-color: #000;
  align-items: center;
  @media (max-width: 768px){
    display: none;

  }

  section {
    display: flex;
    width: 1167px;
    justify-content: space-between;

    div {
      b {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
      }
      div {
        aside {
          width: 45px;
          height: 5px;
          background-color: #fff;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
      address {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
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
