import { Line } from "@src/styles/Style";
import * as S from "./About.style";
import { isMobile } from "@src/Router";

const About = () => {
  return (
    <S.Resume>
      <S.BackBoard
        color={"black"}
        style={{ paddingTop: isMobile ? "70px" : "98px" }}
      >
        <S.Title>Jigeon Park</S.Title>
        <S.Title style={{ fontSize: isMobile ? "16px" : "32px" }}>
          JUNIOR DEVELOPER
        </S.Title>
        <Line color={"white"} vertical={"false"} />
        <S.ProfileContainer>
          <S.SubTitle color={"white"}>Profile</S.SubTitle>
          <S.MainText>
            A passionate junior developer focussing on creating and maximising
            efficiency.
            <br />I have great experience in creating and collaborating on
            projects that increase organisation, productivity and effectiveness.
            {isMobile ? <br /> : " "}With excellent inter-personal skills and
            {isMobile ? <br /> : " "} self-reflective qualities, I am a valuable
            team mate as well as independent work, capable of working in a
            multitude of environments.
            <br />
            <br />
            {/* Holding a current International Student Visa - expires on DATE */}
            I am currently seeking a job.
          </S.MainText>
        </S.ProfileContainer>
      </S.BackBoard>

      <S.BackBoard color={"white"}></S.BackBoard>

      <S.BackBoard color={"black"}></S.BackBoard>
    </S.Resume>
  );
};

export default About;
