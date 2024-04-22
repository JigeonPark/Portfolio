import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<>asd</>} />
        <Route path="/project" element={<>asd</>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
