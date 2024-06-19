import React, { useState } from "react";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import { NavLink } from "react-router-dom";
import { S } from "./components/pages/_styles";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";

const PATH = {
  PAGE1: "/Adidas",
  PAGE2: "/Puma",
  PAGE3: "/Abibas",
  PAGE4: "/Prices",
  MODEL: "/:model/:id",
  PAGEERROR: "/error404",
} as const;

function App() {
  return (
    <div>
      <S.Header>
        <h1>HEADER</h1>
      </S.Header>
      <S.Body>
        <S.Nav>
          <div>
            <S.NavWrapper>
              <NavLink to={PATH.PAGE1}>Adidas</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PAGE2}>Puma</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PAGE3}>Abibas</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PAGE4}>Prices</NavLink>
            </S.NavWrapper>
          </div>
        </S.Nav>
        <S.Content>
          <Outlet />
          {/* <Routes>
            <Route path={"/"} element={<Navigate to={"/Adidas"} />} />

            <Route path={PATH.PAGE1} element={<Adidas />} />
            <Route path={PATH.PAGE2} element={<Puma />} />
            <Route path={PATH.PAGE3} element={<Abibas />} />
            <Route path={PATH.PAGE4} element={<Prices />} />
            <Route path={PATH.MODEL} element={<Model />} />

            <Route path="*" element={<Error404 />} />
          </Routes> */}
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2023</S.Footer>
    </div>
  );
}

export default App;
