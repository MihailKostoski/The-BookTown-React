import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search, NavBar } from "./components";

import "./Styles/app.scss";
const BookDetails = lazy(() => import("./components/BookDetails"));

const Main = lazy(() => import("./components/Main"));

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
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
