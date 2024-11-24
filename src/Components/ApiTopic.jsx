import { useEffect, useState } from "react";
import axios from "axios";
import "./apiTopic.css";

import { useParams } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]);
  const { topic } = useParams();
  console.log(topic);
  const fichData = async () => {
    try {
      const axiosData = await axios.get(
        `https://gutendex.com/books?topic=${topic}`
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
    <>
      <h4 className="mt-5">{topic}</h4>
      {data.length === 0 ? (
        <div
          class="d-flex gap-2 justify-content-center align-items-center"
          style={{ height: "75vh" }}
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
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
    </>
  );
};

export default Api;
