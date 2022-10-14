import React from "react";
import * as S from "../Components/Style/HeaderStyle";
import { Link } from "react-router-dom";

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <S.Header>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <S.Link href="/Home">{rota}</S.Link>
          </S.Li>
          <S.Li>
            <S.Link href="/About">{rota2}</S.Link>
          </S.Li>
          <S.Li>
            <S.Link href="/Works">{rota3}</S.Link>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};
export default Header;
