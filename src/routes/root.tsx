import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
