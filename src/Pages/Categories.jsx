import { Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div
      className="m-3 mx-4 radius-15 changP"
      style={{
        background: "rgb(238,242,243)",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Categories;
