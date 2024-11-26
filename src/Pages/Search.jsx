import { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ searchValue }) => {
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    search: "",
    topic: "",
    author_year_end: "",
    author_year_start: "",
    copyright: "",
    languages: "",
  });
  const [sendForm, setSendForm] = useState({
    topic: "",
    author_year_end: "",
    author_year_start: "",
    copyright: "",
    languages: "",
  });

  const fichData = async () => {
    if (searchValue) {
      try {
        const axiosData = await axios.get(
          `https://gutendex.com/books?search=${searchValue}&&topic=${sendForm.topic}&&author_year_start=${sendForm.author_year_start}&&author_year_end=${sendForm.author_year_end}&&copyright=${sendForm.copyright}&&languages=${sendForm.languages}`
        );
        console.log(axiosData.data);
        setData(axiosData.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(searchValue);
    fichData();
  }, [searchValue, sendForm]);

  const filterFun = (e) => {
    e.preventDefault();
    setSendForm(sendForm);
  };

  return (
    <div className="p-3 px-5">
      <div
        className="p-2 px-5 radius-15"
        style={{
          background: "rgb(238,242,243)",
          color: "rgb(145 0 255)",
          minHeight: "95vh",
        }}
      >
        <p className="w-100 text-end">
          <a
            className="btn btn-secondary"
            data-bs-toggle="collapse"
            href="#filter"
            role="button"
            aria-expanded="false"
            aria-controls="filter"
          >
            filter
          </a>
        </p>
        <form
          id="filter"
          className="border border-success collapse rounded row g-3 my-2 p-4 pt-1"
          onSubmit={filterFun}
        >
          <div className="col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Book's Name  Or  Auther's Name"
              value={form.search}
              onChange={(e) => setForm({ ...form, search: e.target.value })}
            />
          </div>
          <div className="col-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              value={form.topic}
              onChange={(e) => setForm({ topic: e.target.value, ...form })}
              type="text"
              className="form-control"
              id="category"
              placeholder="Book's Category"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="autherStart" className="form-label">
              Author Year Start
            </label>
            <input
              type="number"
              value={form.author_year_start}
              onChange={(e) =>
                setForm({ author_year_start: e.target.value, ...form })
              }
              className="form-control"
              id="autherStart"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="autherEnd" className="form-label">
              Author Year End
            </label>
            <input
              type="number"
              value={form.author_year_end}
              onChange={(e) =>
                setForm({ author_year_end: e.target.value, ...form })
              }
              className="form-control"
              id="autherEnd"
            />
          </div>
          <div className="col-6 row">
            <p className="col-12 m-0 mt-3">the Book has Copyright</p>
            <div className="form-check col-6">
              <input
                className="form-check-input"
                type="radio"
                name="copyright"
                id="copyright1"
                value={true}
                onChange={(e) =>
                  setForm({ ...form, copyright: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="copyright1">
                Yes
              </label>
            </div>
            <div className="form-check col-6">
              <input
                className="form-check-input"
                type="radio"
                name="copyright"
                id="copyright2"
                value={false}
                onChange={(e) =>
                  setForm({ ...form, copyright: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="copyright2">
                No
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="languages" className="form-label">
              Languages
            </label>
            <select
              id="languages"
              className="form-select"
              value={form.languages}
              onChange={(e) => {
                setForm({ ...form, languages: e.target.value });
              }}
            >
              <option defaultValue=""></option>
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
              Filter
            </button>
          </div>
        </form>{" "}
        <div
          className="d-flex gap-2 justify-content-center align-items-center"
          style={{ minHeight: "75vh" }}
        >
          {searchValue ? (
            Object.keys(data).length === 0 ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : data.count > 0 ? (
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
                                <span
                                  className="fw-bold"
                                  style={{ color: "#111" }}
                                >
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
            ) : (
              <p className="fs-2 fw-bold">Sorry, no results found</p>
            )
          ) : (
            <p className="fs-2 fw-bold">
              Please type what you want to Search for..
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
