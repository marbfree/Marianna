import React from "react";
import "../layout/Header.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-tabs">
        <li>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#music"
          onClick={() => handlePageChange("Music")}
          className={currentPage === "Music" ? "nav-link active" : "nav-link"}
        >
          Music
        </a>
      </li>
      <li>
        <a
          href="#yoga"
          onClick={() => handlePageChange("Yoga")}
          className={currentPage === "Yoga" ? "nav-link active" : "nav-link"}
        >
          Yoga & Meditation
        </a>
      </li>
      <li>
        <a
          href="#travel"
          onClick={() => handlePageChange("Travel")}
          className={currentPage === "Travel" ? "nav-link active" : "nav-link"}
        >
          Travel
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;