import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="mt-24">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
