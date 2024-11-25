import ApiTopic from "./Components/ApiTopic";
import Topics from "./Pages/Topics";
import Footer from "./Components/Footer";
import Categories from "./Pages/Categories";
import Home from "./Pages/Home";
import Membership from "./Pages/Membership";
import Search from "./Pages/Search";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";

function App() {

  const [searchValue,setSearchV] = useState('')
  return (
    <>
      <Header searchValue={searchValue} setSearchV={setSearchV}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="" element={<Topics />} />
          <Route path=":topic" element={<ApiTopic />} />
        </Route>
        <Route path="/membership" element={<Membership />} />
        <Route path="/search" element={<Search  searchValue={searchValue} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
