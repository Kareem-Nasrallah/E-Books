import { Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div
      className="m-3 mx-5 radius-15"
      style={{
        background: "rgb(238,242,243)",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Categories;
