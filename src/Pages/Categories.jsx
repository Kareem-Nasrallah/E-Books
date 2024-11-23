import Header from "../Components/Header";
import {  Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-3 px-5">
      <div
        className="p-2 px-5"
        style={{
          background: "rgb(238,242,243)",
          borderRadius: "15px",
          color:"rgb(145 0 255)"
        }}
      >
        <div className="d-flex">
          <div className="col">
            <Header />
          </div>
          <div style={{ width: "507px" }}></div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Categories;
