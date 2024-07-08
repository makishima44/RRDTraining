import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Login } from "../components/pages/Login";

export const PATH = {
  ADIDAS: "/Adidas",
  PUMA: "/Puma",
  ABIBAS: "/Abibas",
  PRICES: "/Prices",
  PROTECTED: "/Protected",
  MODEL: "/:model/:id",
  EROOR: "/error",
  LOGIN: "/login",
} as const;

const publicRoutes: RouteObject[] = [
  { path: PATH.ADIDAS, element: <Adidas /> },
  { path: PATH.PUMA, element: <Puma /> },
  { path: PATH.ABIBAS, element: <Abibas /> },
  { path: PATH.PRICES, element: <Prices /> },
  { path: PATH.MODEL, element: <Model /> },
  { path: PATH.EROOR, element: <Error404 /> },
  { path: PATH.LOGIN, element: <Login /> },
];

const priveteRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage />,
  },
];

export const PrivateRoutes = () => {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={PATH.ADIDAS} />, // Перенаправление с главной страницы на Adidas
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <PrivateRoutes />,
        children: priveteRoutes,
      },
      ...publicRoutes,
      { path: "*", element: <Navigate to={PATH.EROOR} /> },
    ],
  },
]);
