import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 170px;
      height: 41px;
    }
    > div {
      flex: 1;
      border-bottom: 1px solid #ccc;
      display: flex;
      height: 35px;
      max-width: 700px;

      input {
        flex: 1;
        background: transparent;
        border: 0 none;
        color: #000;
        outline: none;

        &::placeholder {
          color: #000;

        }
        
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
    button {
      background: transparent;
      display: flex;
      align-items: center;
      padding: 10px;

      border: 0 none;

      transition: all 0.3s ease-in;
      cursor: pointer;
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
    aside{
        display: flex;
        align-items: center;

        img{
            width: 18px;
            height: 18px;
        }
        
        div{
            width: 15px;
            height: 15px;
            border-radius:50% ;
            background-color: #F8475F;
            margin-left: 9px;
            span{
                color: #fff;
                margin: auto;
                font-size: 10px;
            }
        }
    } 
  }
`;
