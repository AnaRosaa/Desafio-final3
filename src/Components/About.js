import React from "react";
import * as S from "./Style/AboutStyle";
import ideia from "../Img/ideia2.png";

export default function About() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.H2>About me</S.H2>
      <S.DivTwo>
        <S.ImgT src={ideia} />
        <S.POne>
          Tenho 16 anos, nasci no Rio de Janeiro. Sou uma pessoa criativa e bem
          calma, Tenho muito sonhos e muitos planos pela frente. No momento
          estou no ensino médio.
        </S.POne>

        <S.ImgT src={ideia} />
        <S.PTwo>
          Desde criança sempre gostei e era interessada por esse meio da
          internet, mas sempre quis ir mais a fundo. No Vai Na Web Aprendi o
          básico de frontEnd, aprendi a me socializar mais em publico. Foi a
          melhor experiência que eu tive e a melhor escolha.
        </S.PTwo>

        <S.ImgT src={ideia} />
        <S.PThee>
          Gosto muito de estar perto da natureza, lá me sinto com as energias
          renovadas. Não vivo sem ouvir música e meus animais favoritos são as
          serpentes e as capivaras.
        </S.PThee>
      </S.DivTwo>
    </S.Container>
  );
}
