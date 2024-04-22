import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import { useRef, useState } from "react";

const Header = () => {
  const headerList = ["About", "Resume", "Project", "Contact"];
  const navigate = useNavigate();
  const borderRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<String>("About");

  function pathController(d: String) {
    if (d === "Project") {
      navigate(`/${d.toLowerCase()}`);
    } else if (d === "About") {
      navigate(`/`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (d === "Resume") {
      navigate(`/`);
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <S.Header>
      {headerList.map((d: string, i: number) => {
        return (
          <S.HeaderBtn
            key={i}
            border={path === d}
            onClick={() => {
              setPath(d);
              pathController(d);
              borderRef.current!.style.transform = `translate(${
                headerList.indexOf(d) * 128
              }px, 0px)`;
            }}
          >
            {d}
          </S.HeaderBtn>
        );
      })}
      <S.Border ref={borderRef} />
    </S.Header>
  );
};

export default Header;
