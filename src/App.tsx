import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { S } from "./components/pages/_styles";
import { PATH } from "./routes/router";

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
              <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PUMA}>Puma</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PRICES}>Prices</NavLink>
            </S.NavWrapper>
            <S.NavWrapper>
              <NavLink to={PATH.PROTECTED}>ProtectedPage</NavLink>
            </S.NavWrapper>
            {/* <S.NavWrapper>
              <NavLink to={PATH.LOGIN}>Login</NavLink>
            </S.NavWrapper> */}
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
