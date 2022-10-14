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
  align-items: center;
  justify-content: center;
  background-color: #000000;
  display: flex;
  @media screen and (min-width: 360px) and (max-width: 800px) {

    width: 100%;
    height: 100vh;
  }
`;
export const DivTwo = styled.div`
  display: flex;
  width: 24vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 12vw;

  @media screen and (min-width: 360px) and (max-width: 800px) {

    width: 24vw;
    height: 50vh;
    margin-bottom: 6vw;
   
  }
`;
export const ImgT = styled.img`
  width: 58vw;
  display: flex;
  border-color: #ffd700;
  border: solid #ffd700;

  border-radius: 100%;
  height: 59vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {

    width: 60vw;
    margin-left: 65vw;
    height: 57vh;
  }
`;
export const DivBox = styled.div`
   display: flex;
  width: 30vw;
  height: 12vh;
  margin-left: 7vw;
  margin-bottom: 22vh;
  
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 30vw;
    height: 4vh;
    margin-left: 12vw;
    margin-bottom: 88vh;
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  color: #ffffff;
  text-shadow: #ffd700 0.1px 0.1px 0.2px;
  :hover {
    color: #ffd700;
    cursor: pointer;
    font-weight: 7px bold;
    text-shadow: #ffffff 0.1em 0.1em 0.2em;
  }
`;

export const Figure = styled.figure`
  display: flex;
  width: 12vw;
  margin-top: 20vw;
  justify-content: space-evenly;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    margin-top: 87vw;
    width: 30vw;
  }
`;
export const ImgTwo = styled.img`
  width: 3vw;
  height: 7vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 11vw;
    height: 7vh;
  }
`;
