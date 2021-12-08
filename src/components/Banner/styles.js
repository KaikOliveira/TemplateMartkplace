import styled from "styled-components";
export const Dots = styled.section`
    width: 70px;
    height: 10px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 27px;
    left:calc(50% - 35px); 

  

    aside{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #BDBDBD;
        
        &:first-child{
        background-color: #F8475F;
    }
    }
`;


export const BannerContainer = styled.div`
    width: 100vw;
    height: 430px;
    position: relative;

    img{
        width: 100%;
        height: 100%;
    }
    div{
    height:auto ;
    width: 420px;
    position: absolute;
    top: 117px;
    left: 380px;

    p{
        color:#fff;
        font-size: 30px;
        font-weight: 700;
        line-height: 10px;
    }
    
    strong{
        color: #fff;
        font-size: 45px;
        font-weight: 900;
        line-height: 50px;
    }

    }

`;