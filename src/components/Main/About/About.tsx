import { Line } from "@src/styles/Style";
import * as S from "./About.style";
import { isMobile } from "@src/Router";
import {
  EducationInfo,
  ExperienceInfo,
  ExperienceType,
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
                <div key={i} style={{ marginBottom: "24px" }}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.context}</S.Text>
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
                <div key={i} style={{ marginBottom: "24px" }}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.context}</S.Text>
                </div>
              );
            })}

            <S.SubTitle color={"black"}>Education</S.SubTitle>
            {EducationInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.context}</S.Text>
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
  const [isHovering, setIsHovering] = useState<Array<boolean>>([true]);

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
      <S.SubTitle
        color={"white"}
        style={{ marginBottom: isMobile ? "15px" : "0px" }}
      >
        Work Experience
      </S.SubTitle>
      <S.ExperienceContainer>
        {ExperienceInfo.map((d: ExperienceType, i: number) => {
          return (
            <S.Company
              style={{
                cursor: isHovering[i] ? "n-resize" : "s-resize",
                height:
                  isHovering[i] && isMobile
                    ? "260px"
                    : isHovering[i]
                    ? "180px"
                    : isMobile
                    ? "37px"
                    : "50px",
                width:
                  isHovering[i] && isMobile
                    ? "40vw"
                    : isHovering[i]
                    ? "431px"
                    : isMobile
                    ? "100px"
                    : "150px",
              }}
              key={i}
              onClick={() => {
                isHovering[i] === true
                  ? setHoveringList(false, i)
                  : setHoveringList(true, i);
              }}
            >
              <S.MainText color={"black"}>{d.title}</S.MainText>
              <S.ExperienceText
                color={"black"}
                // style={{ display: isHovering[i] ? "flex" : "none" }}
              >
                <div id="PD">
                  <div>{d.position}</div>
                  <div>{d.date}</div>
                </div>
                <div>
                  {d.context.map(
                    (
                      item: { subTitle: string; subContext: string[] },
                      idx: number
                    ) => {
                      return (
                        <div key={idx} id="detailContext">
                          <p>{item.subTitle}</p>
                          <ul>
                            {item.subContext.map(
                              (subItem: string, subIdx: number) => {
                                return <li key={subIdx}>{subItem}</li>;
                              }
                            )}
                          </ul>
                        </div>
                      );
                    }
                  )}
                </div>
              </S.ExperienceText>
            </S.Company>
          );
        })}
      </S.ExperienceContainer>
    </S.ItemContainer>
  );
};

const Volunteering = () => {
  const [isHovering, setIsHovering] = useState<Array<boolean>>([true]);

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
          <S.VolunteeringContainer
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
            <S.MainText color={"white"}>{d.title}</S.MainText>
            <p
              id="arrow"
              style={{
                transform: `rotate(${isHovering[i] ? "180" : "0"}deg)`,
              }}
            >
              ▲
            </p>
            <S.VolunteeringText
              style={{
                height:
                  isHovering[i] && isMobile
                    ? "260px"
                    : isHovering[i]
                    ? "180px"
                    : "0px",
              }}
            >
              {d.date}
              <div>
                {Array.isArray(d.context) &&
                  d.context.map((data: string, idx: number) => {
                    return <li key={idx}>{data}</li>;
                  })}
              </div>
            </S.VolunteeringText>
          </S.VolunteeringContainer>
        );
      })}
    </S.ItemContainer>
  );
};

export default About;
