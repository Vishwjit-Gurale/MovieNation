import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleBottomNavigation from "./components/MainNav";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import Search from "./pages/Search/Search";
import Movies from "./pages/Movies/Movies";
import Trending from "./pages/Trending/Trending";
import TVSeries from "./pages/Series/TVSeries";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/TVSeries" element={<TVSeries />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
      {/* <Login></Login> */}
    </BrowserRouter>
  );
}

export default App;
