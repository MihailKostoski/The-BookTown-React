import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Search from "./components/SearchBar/Search/Search";
import About from "./components/Sidebar/About/About";

import "./Styles/app.scss";
const BookDetails = lazy(() => import("./components/Book/BookDetails"));

const Main = lazy(() => import("./components/Main/Main"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path={"/book/:id"} element={<BookDetails />} />
            <Route path="/search/:bookName" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
