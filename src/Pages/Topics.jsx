import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = [
    "Antiquities",
    "Adventure",
    "Art",
    "Biographies",
    "Business",
    "Children",
    "Cooking",
    "Drama",
    "Fantasy",
    "Health",
    "Historical Fiction",
    "Horror",
    "Humor",
    "Mystery",
    "Philosophy",
    "Poetry",
    "Religion",
    "Romance",
    "Science",
    "Science Fiction",
    "Self-Help",
    "Short Stories",
    "Sports",
    "Technology",
    "Thriller",
    "Travel",
    "Literature",
  ];

  return (
    <div className="row mt-5  justify-content-evenly">
      {topics.map((topic) => (
        <div className="col-lg-2 col-3 text-center my-4 mx-5" key={topic}>
          <Link
            className="d-inline-block"
            style={{ width: "fit-content" }}
            to={`${topic}`}
          >
            <h5 className="text-nowrap" style={{ width: "fit-content" }}>
              {topic}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Topics;
