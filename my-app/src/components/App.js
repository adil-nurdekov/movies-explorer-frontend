import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Main from "./main/Main";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import SearchForm from "./movies/SearchForm";
import SavedMovies from "./saved-movies/SavedMovies";
import Profile from "./Profile";
import Movies from "./movies/Movies";
import BurgerMenu from "./movies/BurgerMenu";
import Preloader from "./Preloader";

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const closeBurger = () => {
    setIsBurgerOpen(false);
  };
  const handleBurgerMenu = () => {
    setIsBurgerOpen(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/pre" element={<Preloader />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route
          path="saved-movies"
          element={<SavedMovies handleBurgerMenu={handleBurgerMenu} />}
        ></Route>
        <Route
          path="/movies"
          element={<Movies handleBurgerMenu={handleBurgerMenu} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile handleBurgerMenu={handleBurgerMenu} />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <BurgerMenu isOpen={isBurgerOpen} closeBurger={closeBurger}></BurgerMenu>
    </div>
  );
}

export default App;
