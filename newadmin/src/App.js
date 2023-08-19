import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import BackgroundWithText from "./components/BackgroundWithText";
import Add from "./components/Add";
import Notfound from "./components/Notfound";
import Myhome from "./components/Myhome";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search functionality here
    console.log("Search submitted:", searchQuery);
  };

  return (
    <div>
      
      <nav className="navbar navbar-expand navbar-light bg-dark">
        <ul className="nav ml-auto justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Add">
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Update">
              Update
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Delete">
              Delete
            </NavLink>
          </li>

          {/* Search bar */}
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-success" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </nav>
      

      <div className="container">
        <Routes>
          <Route path="/" element={<Myhome />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <BackgroundWithText />
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;
