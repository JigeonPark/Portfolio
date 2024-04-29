import { Line } from "../../../styles/Style";
import * as S from "./About.style";

const About = () => {
  return (
    <S.Resume>
      <S.BackBoard color={"black"} style={{ paddingTop: "98px" }}>
        <S.Title>Jigeon Park</S.Title>
        <S.Title style={{ fontSize: "32px" }}>JUNIOR DEVELOPER</S.Title>
        <Line color={"white"} isVertical={false} />
        <S.ProfileContainer>
          <S.SubTitle color={"white"}>Profile</S.SubTitle>
          <S.MainText>
            A passionate junior developer focussing on creating and maximising
            efficiency.
            <br />
            I have great experience in creating and collaborating on projects
            that increase organisation, productivity and effectiveness. With
            excellent inter-personal skills and self-reflective qualities, I am
            a valuable team mate as well as independent work, capable of working
            in a multitude of environments.
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
