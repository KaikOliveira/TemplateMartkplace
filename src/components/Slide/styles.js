import styled from "styled-components";

export const SlideContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  align-self: center;

  div {
    margin-top: 25px;
    strong {
    }
    > aside {
      width: 65px;
      height: 3px;
      margin-top: 5px;
      background-color: #c0c0c0;
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    aside {
      display: flex;
      align-items: center;
      position: absolute;

      &.left {
        left: -25px;
      }
      &.right {
        right: -25px;
      }
    }
    div {
      width: 216px;
      background-color: #fff;
      img {
        width: 216px;
        height: 200px;
      }

      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0 15px 0;
        justify-content: space-between;

        p {
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #7a7a7a;
        }
        img {
          display: flex;
          width: 65px;
          height: 10px;
          align-self: center;
          margin-bottom: 20px;
        }

        span {
          color: #7a7a7a;

          &.linha_riscado {
            text-decoration: line-through;
          }
        }

        b {
          margin-bottom: 5px;
        }

        button {
          color: #fff;
          margin-top: 10px;
          border-radius: 5px;
          background-color: #000;
          border: 0 none;
          cursor: pointer;
          width: 126px;
          height: 35px;

          &:hover {
            background: #ccc;
          }
        }
      }
    }
  }
`;
