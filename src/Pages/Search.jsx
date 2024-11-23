import React from "react";
import Header from "../Components/Header";

const Search = () => {
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
          <div className="col-12">
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
          <div className="col-md-4">
            <label for="copyright" className="form-label">
              Has Copyright ?
            </label>
            <select id="copyright" className="form-select">
              <option selected></option>
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
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
    </div>
  );
};

export default Search;
