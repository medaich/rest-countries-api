import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1>You're in the Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
