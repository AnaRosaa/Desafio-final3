import React from "react";
import * as S from "./Style/WorksStyle";

export default function Works() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <S.Link href="https://github.com/AnaRosaa/starwarsVnW">
          Star Wars
        </S.Link>
        <S.P>Html e css</S.P>
        <S.Link href="https://github.com/AnaRosaa/Desafio-Pair-Programming">
          Recipes
        </S.Link>
        <S.P>React Hooks em dupla</S.P>
        <S.Link href="https://classroom.google.com/c/MjI4MTg3NDc5MTU3/S.Link/MjI4MTg3NDc5MjQ3/details">
          Finn
        </S.Link>
        <S.P>Html e css</S.P>
        <S.Link href="https://codesandbox.io/s/filmas-1-4717cl?file=/src/Rotas/Header.js">
          filmes
        </S.Link>
        <S.P>Apei De filmes com react</S.P>
        <S.Link href="https://codesandbox.io/s/desafio-api-harry-potter-j13fcj">
          Harry Potter
        </S.Link>
        <S.P> React Hooks Api Harry Potter</S.P>
        <S.Link href="https://codesandbox.io/s/adote-um-doguinho-api-wrt55i?file=/src/App.js">
          Dog
        </S.Link>
        <S.P>React Hooks Api Dog</S.P>

        <S.Link href="https://codesandbox.io/s/calculadora1-rezzbq?file=/src/styles.css">
          Calculadora
        </S.Link>
        <S.P>React</S.P>
      </S.Div>
    </S.Container>
  );
}
