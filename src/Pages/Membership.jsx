import React from "react";

const Membership = () => {
  return (
    <>
      <div className="row p-3 px-5" style={{ minHeight: "82vh" }}>
        <div className="col">
          <div
            className="h-50 p-3 px-4 row justify-content-center align-items-center radius-15"
            style={{ background: "rgb(238,242,243)" }}
            >
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
            <div className="col-4 d-flex flex-column gap-2 align-items-center justify-content-center">
              <p
                className="d-inline-block oval-p p-2 px-3 m-0"
                style={{ width: "fit-content", border: "#313539 1px solid" }}
              >
                Join Us
              </p>
              <button className="btn btn-dark oval-arrow">
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
          <div
            style={{
              height: "47%",
              background: "rgb(241 233 235)",
            }}
            className="radius-15 me-2 mt-3 d-flex justify-content-center align-items-center overflow-hidden"
          >
            <img src="/meeting.png" />
          </div>
        </div>
        <div
          className="col ms-2 d-flex align-items-center radius-15"
          style={{
            background: "rgb(255, 228, 201)",
            maxWidth: "500px",
            minHeight: "80vh",
          }}
        >
          <img src="/member.png" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Membership;
