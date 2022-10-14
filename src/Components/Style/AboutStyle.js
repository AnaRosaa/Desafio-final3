import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 100%;
    height: 100vh;
  }
`;
export const H2 = styled.h2`
  display: flex;
  height: 10vh;
  margin-left: 4vw;
  font-size: 44px;
  color: #ffd700;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    font-size: 38px;
  }
`;
export const ImgT = styled.img`
  display: flex;
  width: 9vw;
  height: 11vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 6vw;
    height: 7vh;
  }
`;
export const DivTwo = styled.div`
  display: flex;
  width: 90vw;
  margin-left: 4vw;
  height: 80vh;
  margin-top: 5vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 90vw;
    height: 80vh;
  }
`;
export const POne = styled.p`
  color: #ffffff;
  width: 22vw;
  font-size: 20px;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 60vw;
  }
`;

export const PTwo = styled.p`
  color: #ffffff;
  width: 27vw;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 60vw;
    font-size: 18px;
  }
`;

export const PThee = styled.p`
  color: #ffffff;
  width: 27vw;

  color: #ffffff;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 60vw;
    font-size: 20px;
  }
`;
