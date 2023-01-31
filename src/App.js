
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { BookDetails, Main, NavBar, Search } from "./components";

import "./Styles/app.scss"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
  
          <Routes>
          <Route path="/"  element={<Main />} />
          <Route path={"/book/:id"} element={<BookDetails />} />
          <Route path='/search/:bookName' element={<Search/>} />
          </Routes>
    
     
     
        </div>
      </BrowserRouter>
  );
}

export default App;
