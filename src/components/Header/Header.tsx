import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useEffect, useRef, useState } from "react";
import { contactInfo, contactInfoType } from "./contactInfo";
import { isMobile } from "@src/Router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const borderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const urlPath = location.pathname.split("/")[1];
  const headerList = ["Introduce", "About", "Project", "Contact"];

  const [path, setPath] = useState<String>(
    urlPath === ""
      ? headerList[0]
      : urlPath.charAt(0).toUpperCase() + urlPath.slice(1)
  );
  const [scrollFlag, setScrollFlag] = useState<boolean>(true);

  function ScrollTo(y: number) {
    scrollFlag &&
      window.scrollTo({
        top: y,
      });
  }

  useEffect(() => {
    borderRef.current!.style.transform = `translate(${
      isMobile
        ? headerList.indexOf(`${path}`) * 73.333333
        : headerList.indexOf(`${path}`) * 128
    }px, 0px)`;

    switch (path) {
      case headerList[0]:
        setScrollFlag(true);
        ScrollTo(0);
        break;

      case headerList[1]:
        setScrollFlag(true);
        ScrollTo(window.innerHeight);
        break;

      case headerList[2]:
        navigate(headerList[2].toLowerCase());
        break;

      case headerList[3]:
        // document.body.style.overflow = "hidden";
        isMobile
          ? (headerRef.current!.style.height = "65px")
          : (headerRef.current!.style.height = "115px");

        return () => {
          // document.body.style.overflow = "unset";
          isMobile
            ? (headerRef.current!.style.height = "30px")
            : (headerRef.current!.style.height = "50px");
        };
    }
  }, [path]);

  useEffect(() => {
    function handleScroll() {
      if (urlPath !== headerList[2]) {
        if (window.scrollY < window.innerHeight && path === headerList[1]) {
          setScrollFlag(false);
          setPath(headerList[0]);
        } else if (
          window.scrollY > window.innerHeight &&
          path === headerList[0]
        ) {
          setScrollFlag(false);
          setPath(headerList[1]);
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
              border={`${path === d}`}
              onClick={() => {
                setScrollFlag(true);
                setPath(d);
                if (d === headerList[1] || d === headerList[0]) navigate("/");
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
                src={d.imgSrc}
                alt={d.name}
                key={d.name}
                onClick={() => {
                  window.open(d.link, "_blank", "noopener, noreferrer");
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
