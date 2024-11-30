import React from "react";
import "./membership.css";

const Membership = () => {
  return (
    <>
      <div className="row gap-3 changP" style={{ minHeight: "82vh" }}>
        <div className="col" style={{ minHeight: "82vh" }}>
          <div
            style={{
              height: "47%",
              background: "rgb(241 233 235)",
            }}
            className="radius-15 d-flex justify-content-center mt-2 align-items-center overflow-hidden"
          >
            <img src="/meeting.png" className="meetingPhoto" style={{height:'93%'}} />
          </div>
          <div
            className="p-3 px-4 mt-4 d-flex justify-content-center radius-15 hiro-div"
            style={{ background: "rgb(238,242,243)", height: "47.5%" }}
          >
            <div
              style={{ width: "fit-content" }}
              className="d-flex align-items-stert flex-column justify-content-center"
            >
              <h3
                style={{
                  fontSize: "3.5em",
                  color: "#000",
                  width: "fit-content",
                }}
                className="hiro-text text-capitalize fw-bold mt-4 mb-3"
              >
                Book club meetup
              </h3>
              <p> meetings to exchange and discuss books</p>
            </div>
            <div className="ms-0 d-flex gap-2 align-items-stert justify-content-center join-div">
              <p
                className="d-inline-block oval-p p-2 px-3 m-0 text-nowrap"
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
          className="col d-flex align-items-center justify-content-center radius-15 member-divPhoto"
          style={{
            background: "rgb(255, 228, 201)",
            maxWidth: "500px",
            minWidth: "320px",
            minHeight: "80vh",
          }}
        >
          <img src="/member.png" className="w-100" style={{maxWidth:'500px'}} />
        </div>
      </div>
    </>
  );
};

export default Membership;
