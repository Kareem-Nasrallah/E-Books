import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = [
    "Adult",
    "Adventure",
    "American",
    "Antiquities",
    "Art",
    "Athens",
    "Biographies",
    "Business",
    "Children",
    "Classes",
    "Comedies",
    "Cooking",
    "Courage",
    "Death",
    "Drama",
    "Fantasy",
    "Future Life",
    "German",
    "governesses",
    "Health",
    "Historical Fiction",
    "Home",
    "Horror",
    "Humor",
    "Italy",
    "jokes",
    "Kings",
    "Language",
    "Literature",
    "Love",
    "Married",
    "math",
    "Mystery",
    "Occultism",
    "Philosophy",
    "Physicians",
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
    "Tragedies",
    "Travel",
    "Woodman",
    "Youth",
  ];

  return (
    <div className="row mt-2 pt-4 radius-15 justify-content-evenly">
      {topics.map((topic) => (
        <div className="col-lg-2 col-3 text-center my-4 mx-5" key={topic}>
          <Link
            className="topics d-inline-block p-2 pb-1 text-decoration-none"
            style={{
              width: "fit-content",
              borderRadius: "10px",
            }}
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
