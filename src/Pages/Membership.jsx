import React from "react";
import Header from "../Components/Header";

const Membership = () => {
  return (
    <div className="d-flex p-3 px-5" style={{ minHeight: "100vh" }}>
      <div className="col">
        <div
          className="me-2 p-2 px-5"
          style={{
            background: "rgb(238,242,243)",
            borderRadius: "15px",
            minWidth: "400px",
          }}
        >
          <Header />
          <div></div>
        </div>
      </div>
      <div
        className="vh-100 col ms-2 d-flex align-items-center"
        style={{
          background: "rgb(241 233 235)",
          borderRadius: "15px",
          maxWidth: "500px",
        }}
      >
        <img
          src="/meeting.png"
          style={{ width: "185%", translate: "-20% 0" }}
        />
      </div>
    </div>
  );
};

export default Membership;
