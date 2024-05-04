import { Line } from "@src/styles/Style";
import * as S from "./About.style";
import { isMobile } from "@src/Router";
import {
  EducationInfo,
  LanguagesInfo,
  SLsEVType,
  SkillInfo,
  VolunteeringInfo,
} from "./InfoList";
import { useState } from "react";

const About = () => {
  return (
    <S.About>
      <S.BackBoard
        color={"black"}
        style={{
          paddingTop: isMobile ? "60px" : "90px",
          paddingBottom: isMobile ? "10px" : "30px",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <S.Title>Jigeon Park</S.Title>
        <S.Title style={{ fontSize: isMobile ? "16px" : "32px" }}>
          JUNIOR DEVELOPER
        </S.Title>
        <Line color={"white"} vertical={"false"} />
        <S.ProfileContainer>
          <S.SubTitle color={"white"}>Profile</S.SubTitle>
          <S.MainText color={"white"}>
            A passionate junior developer focussing on creating and maximising
            efficiency.
            <br />I have great experience in creating and collaborating on
            projects that increase organisation, productivity and effectiveness.
            With excellent inter-personal skills and self-reflective qualities,
            I am a valuable team mate as well as independent work, capable of
            working in a multitude of environments.
            <br />
            <br />
            {/* Holding a current International Student Visa - expires on DATE */}
            I am currently seeking a job.
          </S.MainText>
        </S.ProfileContainer>
      </S.BackBoard>

      <S.BackBoard color={"white"}>
        <S.SecondeContainer>
          <S.ItemContainer>
            <S.SubTitle color={"black"}>Skills</S.SubTitle>
            {SkillInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.content}</S.Text>
                </div>
              );
            })}
          </S.ItemContainer>

          <Line color={"black"} vertical={"true"} />

          <S.ItemContainer>
            <S.SubTitle
              color={"black"}
              style={{ marginBottom: isMobile ? "15px" : "0px" }}
            >
              Languages Spoken
            </S.SubTitle>
            {LanguagesInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.content}</S.Text>
                </div>
              );
            })}

            <S.SubTitle color={"black"}>Education</S.SubTitle>
            {EducationInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.content}</S.Text>
                </div>
              );
            })}
          </S.ItemContainer>
        </S.SecondeContainer>
      </S.BackBoard>

      <S.BackBoard color={"black"}>
        <S.SecondeContainer>
          <WorkExperience />
          <Line color={"white"} vertical={"true"} />
          <Volunteering />
        </S.SecondeContainer>
      </S.BackBoard>
    </S.About>
  );
};

const WorkExperience = () => {
  return (
    <S.ItemContainer>
      <S.SubTitle
        color={"white"}
        style={{ marginBottom: isMobile ? "15px" : "0px" }}
      >
        Work Experience
      </S.SubTitle>
      <div>
        <S.MainText color={"white"}>Languages</S.MainText>
        <S.Text>HTML, CSS, JavaScript, TypeScript, Python, C</S.Text>
      </div>
    </S.ItemContainer>
  );
};

const Volunteering = () => {
  const [isHovering, setIsHovering] = useState<Array<boolean>>([false, false]);

  function setHoveringList(b: boolean, i: number) {
    let tmp = [];
    [...isHovering].forEach(() => {
      tmp.push(false);
    });
    tmp[i] = b;
    setIsHovering(tmp);
  }

  return (
    <S.ItemContainer>
      <S.SubTitle color={"white"}>Volunteering</S.SubTitle>
      {VolunteeringInfo.map((d: SLsEVType, i: number) => {
        return (
          <div
            style={{ cursor: isHovering[i] ? "n-resize" : "s-resize" }}
            key={i}
            // onMouseOver={() => {
            //   !isMobile && setHoveringList(true, i);
            // }}
            // onMouseOut={() => {
            //   !isMobile && setHoveringList(false, i);
            // }}
            onClick={() => {
              isHovering[i] === true
                ? setHoveringList(false, i)
                : setHoveringList(true, i);
            }}
          >
            <S.TitleContainer>
              <S.MainText color={"white"}>{d.title}</S.MainText>
              <p
                style={{
                  transform: `rotate(${isHovering[i] ? "180" : "0"}deg)`,
                }}
              >
                ▲
              </p>
            </S.TitleContainer>
            {d.date}
            <S.DotText
              style={{
                height: isHovering[i] ? "150px" : "0px",
              }}
            >
              <br />
              {Array.isArray(d.content) &&
                d.content.map((data: string, idx: number) => {
                  return <li key={idx}>{data}</li>;
                })}
            </S.DotText>
          </div>
        );
      })}
    </S.ItemContainer>
  );
};

export default About;
