import * as S from "./Introduce.style";

const Introduce = () => {
  return (
    <S.About>
      <S.BackBoard color={"black"}>
        <S.Title>Jigeon Park</S.Title>
      </S.BackBoard>

      <S.BackBoard color={"white"}>
        <div>
          <S.IntroduceTxt color={"black"}>
            I’m a Junior
            <br />
            Front-end Developer
            <br />
            from South Korea.
          </S.IntroduceTxt>
          <S.MainText>
            Recently, I worked in front-end development in
            <br />a company where is in South Korea.
            <br />
            <br />I have experience in front-end, back-end, and
            <br />
            embedded software development.
            <br />
            <br />I am interested in software, computer,
            <br />
            hardware, and embedded.
            <br />
            <br />
            I’m a international student now.
          </S.MainText>
        </div>
      </S.BackBoard>
    </S.About>
  );
};

export default Introduce;
