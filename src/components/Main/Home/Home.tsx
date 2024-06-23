import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Home>
      <S.BackBoard color={"black"}>
        <S.Title>Jigeon Park</S.Title>
      </S.BackBoard>

      <S.BackBoard color={"white"}>
        <div>
          <S.IntroduceTxt color={"black"}>
            A Junior
            <br />
            Front-end Developer
          </S.IntroduceTxt>
          <S.MainText>
            A passionate junior developer focussing on creating and maximising
            efficiency.
          </S.MainText>
        </div>
      </S.BackBoard>
    </S.Home>
  );
};

export default Home;
