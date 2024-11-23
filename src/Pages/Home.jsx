import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <div className="row p-3 px-5" style={{ minHeight: "100vh" }}>
        <div
          className="col mx-2 p-2 px-5"
          style={{
            background: "rgb(238,242,243)",
            borderRadius: "15px",
            minWidth: "380px",
          }}
          >
          <Header />
          <div
            className=" d-flex flex-column gap-4 justify-content-evenly py-3"
            style={{ height: "90%" }}
          >
            <h2
              className="heading m-0 text-capitalize fw-bold"
              style={{
                fontSize: "3.5em",
                color: "#000",
                lineHeight: "110%",
              }}
            >
              what book <br /> are you
              <div
                className="d-inline-block ms-3"
                style={{
                  width: "65px",
                  height: "35px",
                  background: "rgb(7 178 146)",
                  borderRadius: "40%",
                  translate: "0px -5px",
                }}
              >
                <img
                  className="d-block m-auto"
                  style={{ translate: "0px -15px" }}
                  height="45px"
                  src="/books.png"
                  alt=""
                />
              </div>
              <br /> looking for
            </h2>
            <p className="m-0" style={{ maxWidth: "500px" }}>
              Not Sure What to read Next? Explore Our Catalog of public Domain
              Dooks With Our Editors
            </p>
            <div>
              <p
                className="d-inline-block oval-p p-2 px-3 m-0 me-2"
                style={{ width: "fit-content", border: "#313539 1px solid" }}
              >
                Explore now
              </p>
              <Link
              to="/categories"
              >
              <button className="btn btn-dark oval-arrow">
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
              </Link>
            </div>
            <div>
              <p
                className="m-0 mb-2"
                style={{
                  wordSpacing: "5px",
                  letterSpacing: "-.5px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                }}
              >
                our community
              </p>
              <div className="d-inline-flex align-items-center gap-3">
                <i
                  className="fa-solid fa-users"
                  style={{ fontSize: "3em", color: "rgb(7 158 126)" }}
                ></i>
                <div className="pt-1" style={{ lineHeight: "20px" }}>
                  <p className="heading fw-bold fs-4 p-0 m-0">40K+</p>
                  <small className="p-0 m-0">Book lovers joined</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col mx-2 d-flex align-items-center"
          style={{
            background: "rgb(255,228,201)",
            borderRadius: "15px",
            maxWidth: "500px",
          }}
        >
          <img
            src="/hero.png"
            style={{ height: "85%", translate: "-20% 0", maxHeight: "550px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
