import React from "react";

const Footer = () => {
  return (
    <div
      style={{ background: "rgb(238, 242, 243)" }}
      className="p-3 px-5 mx-5 mb-3 radius-15 d-flex justify-content-between align-items-center"
    >
      <span className="ps-3">
        copyright © 2024 .. by{" "}
        <a
          href="https://k-nasrallah-portfolio.vercel.app"
          className="fw-bold text-success text-decoration-none"
        >
          Kareem Nasrallah
        </a>
      </span>
      <div className="social-icons pe-3">
        <a
          target="_blank"
          className="ms-3"
          href="https://github.com/Kareem-Nasrallah"
        >
          <i
            class="fa-brands fa-github fs-4 px-2"
            style={{ color: "#000" }}
          ></i>
        </a>
        <a
          target="_blank"
          className="ms-3"
          href="https://www.linkedin.com/in/kareem-nasrallah-181772282/"
        >
          <i class="fa-brands fa-linkedin fs-4 px-2 text-info"></i>
        </a>
        <a
          target="_blank"
          className="ms-3"
          href="https://www.facebook.com/kareem.nasrallah.904"
        >
          <i class="fa-brands fa-facebook fs-4 px-2 text-primary"></i>
        </a>
        <a target="_blank" className="ms-3" href="https://wa.me/+201276434424">
          <i className="fa-brands fa-whatsapp fs-4 px-2 text-success"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
