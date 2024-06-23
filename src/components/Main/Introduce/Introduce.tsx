import * as S from "./Introduce.style";

const Introduce = () => {
  return (
    <S.Introduce>
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
    </S.Introduce>
  );
};

export default Introduce;
