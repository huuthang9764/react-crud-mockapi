import React from "react";
import Navbar from "./components/Narbar/Navbar";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ListUserPage from "./Page/ListUserPage";
import AddUserPage from "./Page/AddUserPage";


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/users" element={<ListUserPage/>}/>
          <Route path="/add-user" element={<AddUserPage/>}/>
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
