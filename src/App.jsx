import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import StudioLists from "./Pages/StudioLists";
import Studio from "./Pages/Studio";

const App = () => {
  const navigate = useNavigate();

  const shouldRenderHeaderAndFooter = () => {
    const currentPath = window.location.pathname;
    return currentPath !== "/login" && currentPath !== "/signup";
  };

  return (
    <>
      {shouldRenderHeaderAndFooter() && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<SignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/studioLists" element={<StudioLists/>}/>
        <Route path="/studio" element={<Studio/>}/>
      </Routes>
      {shouldRenderHeaderAndFooter() && <Footer />}
    </>
  );
};

export default App;
