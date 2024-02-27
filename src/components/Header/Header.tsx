import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      {["About", "Resume", "Project", "Contact"].map((d: string, i: number) => {
        return <S.HeaderBtn key={i}>{d}</S.HeaderBtn>;
      })}
    </S.Header>
  );
};

export default Header;
