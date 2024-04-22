import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const headerList = ["About", "Resume", "Project", "Contact"];
  const navigate = useNavigate();

  return (
    <S.Header>
      {headerList.map((d: string, i: number) => {
        return (
          <S.HeaderBtn key={i} onClick={() => navigate(`/${d.toLowerCase()}`)}>
            {d}
          </S.HeaderBtn>
        );
      })}
    </S.Header>
  );
};

export default Header;
