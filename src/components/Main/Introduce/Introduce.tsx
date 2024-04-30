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
            Recently, I worked in front-end development in a company which is in
            South Korea.
            <br />
            <br />I have experience in front-end, back-end, and embedded
            software development.
            <br />
            <br />I am interested in software, computer, hardware, and embedded.
            <br />
            <br />
          </S.MainText>
        </div>
      </S.BackBoard>
    </S.About>
  );
};

export default Introduce;
