import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useEffect, useRef, useState } from "react";
import { contactInfo, contactInfoType } from "./contactInfo";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const borderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const urlPath = location.pathname.split("/")[1];
  const headerList = ["About", "Resume", "Project", "Contact"];

  const [path, setPath] = useState<String>(
    urlPath === ""
      ? "About"
      : urlPath.charAt(0).toUpperCase() + urlPath.slice(1)
  );
  const [scrollFlag, setScrollFlag] = useState<boolean>(true);

  function ScrollTo(y: number) {
    scrollFlag &&
      window.scrollTo({
        top: y,
      });
  }

  function handleOpenNewTab(url: string) {
    window.open(url, "_blank", "noopener, noreferrer");
  }

  useEffect(() => {
    borderRef.current!.style.transform = `translate(${
      headerList.indexOf(`${path}`) * 128
    }px, 0px)`;

    switch (path) {
      case "About":
        setScrollFlag(true);
        ScrollTo(0);
        break;

      case "Resume":
        setScrollFlag(true);
        ScrollTo(window.innerHeight);
        break;

      case "Project":
        navigate(`project`);
        break;

      case "Contact":
        document.body.style.overflow = "hidden";
        headerRef.current!.style.height = "115px";
        return () => {
          document.body.style.overflow = "unset";
          headerRef.current!.style.height = "50px";
        };
    }
  }, [path]);

  useEffect(() => {
    function handleScroll() {
      if (urlPath !== "project") {
        if (window.scrollY < window.innerHeight && path === "Resume") {
          setScrollFlag(false);
          setPath("About");
        } else if (window.scrollY > window.innerHeight && path === "About") {
          setScrollFlag(false);
          setPath("Resume");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <S.Header ref={headerRef}>
      <S.ItemContainer>
        {headerList.map((d: string, i: number) => {
          return (
            <S.HeaderBtn
              key={i}
              border={path === d}
              onClick={() => {
                setScrollFlag(true);
                setPath(d);
                if (d === "Resume" || d === "About") navigate("/");
              }}
            >
              {d}
            </S.HeaderBtn>
          );
        })}
        <S.Border ref={borderRef} />
      </S.ItemContainer>

      {path === "Contact" && (
        <S.ContactInfoContainer>
          {contactInfo.map((d: contactInfoType) => {
            return (
              <img
                src={`${d.imgSrc}`}
                alt={d.name}
                key={d.name}
                onClick={() => {
                  handleOpenNewTab(`${d.link}`);
                }}
              />
            );
          })}
        </S.ContactInfoContainer>
      )}
    </S.Header>
  );
};

export default Header;
