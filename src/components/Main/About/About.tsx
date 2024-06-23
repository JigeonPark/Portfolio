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
import { useRef, useState } from "react";
import useIntersectionObsever from "@src/hooks/useIntersectionObsever";

const About = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInViewport = useIntersectionObsever(titleRef);

  const secRef = useRef<HTMLHRElement>(null);
  const isSecInViewport = useIntersectionObsever(secRef);

  const thrRef = useRef<HTMLHRElement>(null);
  const isThrInViewport = useIntersectionObsever(thrRef);

  function returnTitleViewport() {
    return isSecInViewport && isTitleInViewport === false
      ? true
      : isTitleInViewport;
  }

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
        <S.Title ref={titleRef} id={returnTitleViewport() ? "opacity" : ""}>
          Jigeon Park
        </S.Title>
        <S.Title
          style={{ fontSize: isMobile ? "16px" : "32px" }}
          id={returnTitleViewport() ? "opacity" : ""}
        >
          JUNIOR DEVELOPER
        </S.Title>
        <Line
          color={"white"}
          vertical={"false"}
          id={returnTitleViewport() ? "opacity" : ""}
        />
        <S.ProfileContainer>
          <S.SubTitle
            color={"white"}
            id={returnTitleViewport() ? "opacity" : ""}
          >
            Profile
          </S.SubTitle>
          <S.MainText
            color={"white"}
            id={returnTitleViewport() ? "opacity" : ""}
          >
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
          <S.ItemContainer id={isSecInViewport ? "leftAni" : ""}>
            <S.SubTitle color={"black"}>SKILLS</S.SubTitle>
            {SkillInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.context}</S.Text>
                </div>
              );
            })}
          </S.ItemContainer>

          <Line
            color={"black"}
            vertical={"true"}
            id={isSecInViewport ? "opacity" : ""}
            ref={secRef}
            time={"4"}
          />

          <S.ItemContainer id={isSecInViewport ? "rightAni" : ""}>
            <S.SubTitle
              color={"black"}
              style={{ marginBottom: isMobile ? "15px" : "0px" }}
            >
              LANGUAGES SPOKEN
            </S.SubTitle>
            {LanguagesInfo.map((d: SLsEVType, i: number) => {
              return (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <S.MainText>{d.title}</S.MainText>
                  <S.Text>{d.context}</S.Text>
                </div>
              );
            })}

            <S.SubTitle color={"black"}>EDUCATION</S.SubTitle>
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
        <S.SecondeContainer id={isThrInViewport ? "animation" : ""}>
          <WorkExperience />
          <Line
            color={"white"}
            vertical={"true"}
            ref={thrRef}
            id={isThrInViewport ? "opacity" : ""}
            time={"4"}
          />
          <Volunteering />
        </S.SecondeContainer>
      </S.BackBoard>
    </S.About>
  );
};

const WorkExperience = () => {
  const [isDisplay, setIsDisplay] = useState<Array<boolean>>([true]);

  function setHoveringList(b: boolean, i: number) {
    let tmp = [];
    [...isDisplay].forEach(() => {
      tmp.push(false);
    });
    tmp[i] = b;
    setIsDisplay(tmp);
  }

  return (
    <S.ItemContainer id="experience">
      <S.SubTitle
        color={"white"}
        style={{ marginBottom: isMobile ? "15px" : "0px" }}
      >
        WORK EXPERIENCE
      </S.SubTitle>
      <S.ExperienceContainer>
        {ExperienceInfo.map((d: ExperienceType, i: number) => {
          return (
            <S.Company
              style={{
                cursor: isDisplay[i] ? "nw-resize" : "se-resize",
                height:
                  isDisplay[i] && isMobile
                    ? d.height[1]
                    : isDisplay[i]
                    ? d.height[0]
                    : isMobile
                    ? "37px"
                    : "50px",
                width:
                  isDisplay[i] && isMobile
                    ? "40vw"
                    : isDisplay[i]
                    ? "431px"
                    : isMobile
                    ? "100px"
                    : "150px",
              }}
              key={i}
              onClick={() => {
                isDisplay[i] === true
                  ? setHoveringList(false, i)
                  : setHoveringList(true, i);
              }}
            >
              <S.MainText color={"black"}>{d.title}</S.MainText>
              <S.ExperienceText color={"black"}>
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
  const [isDisplay, setIsDisplay] = useState<Array<boolean>>([true]);

  function setHoveringList(b: boolean, i: number) {
    let tmp = [];
    [...isDisplay].forEach(() => {
      tmp.push(false);
    });
    tmp[i] = b;
    setIsDisplay(tmp);
  }

  return (
    <S.ItemContainer id="volunteering">
      <S.SubTitle color={"white"}>VOLUNTEERING</S.SubTitle>
      {VolunteeringInfo.map((d: SLsEVType, i: number) => {
        return (
          <S.VolunteeringContainer
            style={{ cursor: isDisplay[i] ? "n-resize" : "s-resize" }}
            key={i}
            onClick={() => {
              isDisplay[i] === true
                ? setHoveringList(false, i)
                : setHoveringList(true, i);
            }}
          >
            <S.MainText color={"white"}>{d.title}</S.MainText>
            <p
              id="arrow"
              style={{
                transform: `rotate(${isDisplay[i] ? "180" : "0"}deg)`,
              }}
            >
              ▲
            </p>
            <S.VolunteeringText
              style={
                Array.isArray(d.height) && d.height
                  ? {
                      height:
                        isDisplay[i] && isMobile
                          ? d.height[1]
                          : isDisplay[i]
                          ? d.height[0]
                          : "0px",
                    }
                  : undefined
              }
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
