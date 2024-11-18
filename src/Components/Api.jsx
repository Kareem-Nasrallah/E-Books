import { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState("");
  const fichData = async () => {
    try {
      const axiosData = await axios.get("https://gutendex.com/books");
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
      <h1>{data}</h1>
    </>
  );
};

export default Api;
