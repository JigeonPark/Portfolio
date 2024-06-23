import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import styled from "styled-components";

export const isMobile = window.innerWidth < 576;

const Root = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Router = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Root>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
};
