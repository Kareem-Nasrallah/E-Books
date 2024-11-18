import React, { useEffect } from "react";

import axios from "axios";

const Categories = () => {
  const fichData = async () => {
    try {
      const axiosData = await axios.get("https://gutendex.com/books");
      console.log(axiosData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fichData();
  }, []);

  return <div>Categories</div>;
};

export default Categories;
