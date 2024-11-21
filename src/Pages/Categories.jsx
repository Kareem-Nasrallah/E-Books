import { useEffect, useState } from "react";
import "./categories.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";

import Header from "../Components/Header";
import axios from "axios";

const Categories = () => {
  const [data, setData] = useState("");

  const fichData = async () => {
    try {
      const axiosData = await axios.get("https://gutendex.com/books?topic=children");
      console.log(axiosData.data.results);
      setData(axiosData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fichData();
  }, []);

  const booksCaver = () => {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Scrollbar, Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
      >
        {data.results?.map((book, i) => (
          <SwiperSlide key={i}>
            <div className="card bg-dark text-white" >
              <img
                src={book.formats["image/jpeg"]}
                width="30px"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay" style={{textAlign:'center'}}>
                <h5 className="card-title" style={{fontSize:'14px', color:'#000'}}>{book.title}</h5>
                <p className="card-text" style={{fontSize:'12px', color:'#111'}}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div className="p-3 px-5">
      <div
        className="p-2 px-5"
        style={{
          background: "rgb(238,242,243)",
          borderRadius: "15px",
        }}
      >
        <div className="d-flex">
          <div className="col">
            <Header />
          </div>
          <div style={{ width: "507px" }}></div>
        </div>
        <div>{booksCaver()}</div>
      </div>
    </div>
  );
};

export default Categories;
