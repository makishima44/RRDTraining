import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";

const PATH = {
  ADIDAS: "/Adidas",
  PUMA: "/Puma",
  ABIBAS: "/Abibas",
  PRICES: "/Prices",
  PROTECTED: "/Protected",
  MODEL: "/:model/:id",
  EROOR: "/error",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: PATH.ADIDAS, element: <Adidas /> },
      { path: PATH.PUMA, element: <Puma /> },
      { path: PATH.ABIBAS, element: <Abibas /> },
      { path: PATH.PRICES, element: <Prices /> },
      { path: PATH.MODEL, element: <Model /> },
      {
        path: PATH.PROTECTED,
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      { path: PATH.EROOR, element: <Error404 /> },
    ],
  },
]);
