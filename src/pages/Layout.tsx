import { Outlet } from "react-router";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

const Layout = () => {
  return (
    <div className="h-dvh">
      <Header />
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </div>
  );
};

export default Layout;
