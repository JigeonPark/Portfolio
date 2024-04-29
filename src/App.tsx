import React from "react";
import ReactDOM from "react-dom/client";
// import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/GolbalStyle";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <GlobalStyle />
    <Router />
    {/* </RecoilRoot> */}
  </React.StrictMode>
);
