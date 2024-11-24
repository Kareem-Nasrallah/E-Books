import { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);

  const fichData = async () => {
    try {
      const axiosData = await axios.get(
        `https://gutendex.com/books?topic=${topic}&limit=22`
      );
      console.log(axiosData.data);
      setData(axiosData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fichData();
  }, []);

  return (
    <div className="p-3 px-5">
      <div
        className="p-2 px-5"
        style={{
          background: "rgb(238,242,243)",
          borderRadius: "15px",
          color: "rgb(145 0 255)",
          minHeight: "95vh",
        }}
      >
        <div className="d-flex">
          <div className="col">
            <Header />
          </div>
          <div style={{ width: "507px" }}></div>
        </div>
        <form className="row g-3 mt-4 pt-1">
          <div className="col-6">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Book's Name  Or  Auther's Name"
            />
          </div>
          <div className="col-6">
            <label for="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Book's Category"
            />
          </div>
          <div className="col-md-6">
            <label for="autherStart" className="form-label">
              Author Year Start
            </label>
            <input type="text" className="form-control" id="autherStart" />
          </div>
          <div className="col-md-6">
            <label for="autherEnd" className="form-label">
              Author Year End
            </label>
            <input type="text" className="form-control" id="autherEnd" />
          </div>
          <div className="col-6 row">
            <p className="col-12 m-0 mt-3">the has </p>
          <div className="form-check col-6">
            <input
              className="form-check-input"
              type="radio"
              name="copyright"
              id="copyright1"
            />
            <label className="form-check-label" for="copyright1">
              Default radio
            </label>
          </div>
          <div className="form-check col-6">
            <input
              className="form-check-input"
              type="radio"
              name="copyright"
              id="copyright2"
            />
            <label className="form-check-label" for="copyright2">
              Default checked radio
            </label>
          </div>
          </div>
          <div className="col-md-4">
            <label for="languages" className="form-label">
              Languages
            </label>
            <select id="languages" className="form-select">
              <option selected></option>
              <option value="ar">Arabic</option>
              <option value="fr">french</option>
              <option value="ar">Arabic</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="zh">Chinese (Simplified)</option>
              <option value="ja">Japanese</option>
              <option value="ru">Russian</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="hi">Hindi</option>
              <option value="ko">Korean</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Searsh
            </button>
          </div>
        </form>
      </div>
      <div>
        {data.length === 0 ? (
          <div
            className="d-flex gap-2 justify-content-center align-items-center"
            style={{ height: "75vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row gap-5 mt-4">
              {data.results?.slice(0, 18).map((book, i) => (
                <div
                  className="col p-0 d-flex justify-content-center align-items-center"
                  key={i}
                  style={{ width: "150px" }}
                >
                  <div className="card">
                    <img
                      src={book.formats["image/jpeg"]}
                      className="card-img border border-dark"
                      style={{ width: "150px" }}
                    />
                    <div
                      className="card-img-overlay d-flex flex-column justify-content-between overflow-auto"
                      style={{ textAlign: "center" }}
                    >
                      <h5
                        className="card-title"
                        style={{ fontSize: "14px", color: "#000" }}
                      >
                        {book.title}
                      </h5>
                      <a
                        href={book.formats["text/html"]}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read
                      </a>
                      <div>
                        {book.authors.map((author, i) => (
                          <p
                            className="card-text fw-normal m-0"
                            style={{ fontSize: "12px", color: "#111" }}
                            key={i}
                          >
                            <span className="fw-bold" style={{ color: "#111" }}>
                              By:{" "}
                            </span>
                            {author.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
