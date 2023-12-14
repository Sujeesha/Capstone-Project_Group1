import React, { useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import BackgroundWithText from "./components/BackgroundWithText";
import Add from "./components/Add";
import Notfound from "./components/Notfound";
import Myhome from "./components/Myhome";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Footer from "./components/Footer";
import Song16Page from "./components/Song16Page"; // Import the Song16Page component

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

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
      <nav className="navbar navbar-expand navbar-light bg-dark fixed-top">
        <ul className="nav">
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
          <li className="nav-item">
            <form className="form-inline" onSubmit={handleSearchSubmit}>
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
        {/* Display the welcome message on the right side */}
        {username && (
          <div className="nav ml-auto">
            <p className="nav-link">Welcome, {username}!</p>
          </div>
        )}
      </nav>

      <div className="container" style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Myhome />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/song-16-page/:songId" element={<Song16Page />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <BackgroundWithText />
      </div>

      <Footer />
    </div>
  );
}

export default App;
