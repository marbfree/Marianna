import React from "react";
import "../layout/Header.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Music
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bio"
          onClick={() => handlePageChange("Bio")}
          className={currentPage === "Bio" ? "nav-link active" : "nav-link"}
        >
          Yoga & Meditation
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Travel
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;