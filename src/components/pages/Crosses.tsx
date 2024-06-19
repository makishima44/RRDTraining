import { Outlet } from "react-router-dom";

export const Crosses = () => {
  return (
    <div>
      <div>HEADER</div>
      <Outlet />
      <div>FOOTER</div>
    </div>
  );
};
