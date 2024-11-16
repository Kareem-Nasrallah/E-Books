import React from "react";
import Header from "../Components/Header";
import Star from "../Components/star";

const Home = () => {
  return (
    <>
      <div className="vh-100 p-4">
        <div className="h-100 row">
          <div
            className="h-100 col mx-2"
            style={{
              background: "rgb(238,242,243)",
              borderRadius: "15px",
              minWidth: "380px",
            }}
          >
            <Header />
            <div
              className="d-flex justify-content-evenly"
              style={{ height: "75%" }}
            >
              <h2
                className="heading"
                style={{
                  fontSize: "4em",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                what book <br /> are you
                <div
                  className="d-inline-block ms-4"
                  style={{
                    width: "70px",
                    height: "40px",
                    background: "rgb(155,111,218)",
                    borderRadius: "40%",
                    translate: "0 10px",
                  }}
                >
                  <img
                    className="d-block m-auto"
                    style={{ translate: "5px -20px" }}
                    height="50px"
                    src="/books.png"
                    alt=""
                  />
                </div>
                <br /> looking for
              </h2>
            </div>
          </div>
          <div
            className="h-100 col mx-2 d-flex align-items-center"
            style={{
              background: "rgb(255,228,201)",
              borderRadius: "15px",
              maxWidth: "400px",
            }}
          >
            <img
              src="/hero.png"
              style={{ height: "85%", translate: "-100px 0" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
