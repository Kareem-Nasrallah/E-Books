import React from "react";
import Header from "../Components/Header";

const Membership = () => {
  return (
    <div className="d-flex p-3 px-5" style={{ minHeight: "100vh" }}>
      <div
        className="col"
        style={{
          height: "95vh",
        }}
      >
        <div
          className="me-2 p-2 px-5 h-50"
          style={{
            background: "rgb(238,242,243)",
            borderRadius: "15px",
            minWidth: "400px",
          }}
        >
          <Header />
          <div className="row">
            <div className="col">
              <h3
                style={{
                  fontSize: "3.5em",
                  color: "#000",
                }}
                className="text-capitalize fw-bold mt-4 mb-3"
              >
                Book club meetup
              </h3>
              <p> meetings to exchange and discuss books</p>
            </div>
            <div className="col-4 d-flex flex-column gap-2 align-items-start justify-content-center">
              <p
                className="d-inline-block oval-p p-2 px-3 m-0 me-2"
                style={{ width: "fit-content", border: "#313539 1px solid" }}
              >
                Join Us
              </p>
              <button className="btn btn-dark oval-arrow">
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "47%",
            borderRadius: "15px",
            background: "rgb(241 233 235)",
          }}
          className="me-2 mt-3 d-flex justify-content-center align-items-center overflow-hidden"
        >
          <img src="/meeting.png" />
        </div>
      </div>
      <div
        className="col ms-2 d-flex align-items-center"
        style={{
          background: "rgb(255, 228, 201)",
          borderRadius: "15px",
          maxWidth: "500px",
          height: "95vh",
        }}
      >
        <img src="/member.png" className="w-100" />
      </div>
    </div>
  );
};

export default Membership;
