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
  background-color: #000000;
  
`;
export const Div = styled.div`
  display: flex;
  width: 90vw;
  margin-left: 4vw;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;

`;

export const P = styled.p`
color: #ffffff;
 
`;

export const Link = styled.a`
  display: flex;
  color: #ffffff;
  font-size:25px;
  text-decoration-color: #ffd700;

  :hover {
    color: #ffd700;
    cursor: pointer;
    font-weight: 7px bold;
    text-shadow: #ffffff 0.1em 0.1em 0.2em;
  }

  @media screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
  margin-top:7vh;
  }
  `;