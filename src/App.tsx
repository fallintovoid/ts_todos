import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import AboutPage from "./pages/Aboutpage";
import TodosPage from "./pages/Todospage";

const App: React.FunctionComponent = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/todos' element={<TodosPage/>}/>
              <Route path='/' element={<AboutPage/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
