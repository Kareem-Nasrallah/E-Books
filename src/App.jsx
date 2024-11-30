import ApiTopic from "./Components/ApiTopic/ApiTopic";
import Topics from "./Pages/Categories/Topics";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories/Categories";
import Home from "./Pages/Home/Home";
import Membership from "./Pages/Membership/Membership";
import Search from "./Pages/Search";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
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
        <Route path="/search" element={<Search  searchValue={searchValue} setSearchV={setSearchV} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
