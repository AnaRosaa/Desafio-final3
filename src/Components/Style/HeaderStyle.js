import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;
export const Header = styled.header`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  width: 50vw;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-size: 24px;
`;

export const Ul = styled.ul`
  display: flex;
  width: 100vw;
  margin-left: 55vw;
  justify-content: center;
  align-items: center;

  height: 9vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    margin-right: 33vw;
    margin-top: 17vh;
  }
`;

export const Li = styled.li`
  display: flex;
  width: 9vw;
  justify-content: space-evenly;
  height: 5vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    margin-right: 15vw;
  }
`;
export const Link = styled.a`
  display: flex;
  color: #ffffff;
  text-decoration-color: #ffd700;

  :hover {
    color: #ffd700;
    cursor: pointer;
    font-weight: 7px bold;
    text-shadow: #ffffff 0.1em 0.1em 0.2em;
  }
`;
