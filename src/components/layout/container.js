import React, { useState } from "react";
import Home from "../pages/Home"
import Yoga from "../pages/Yoga"
import NavTabs from "./Header";
import Travel from "../pages/Travel"
import Music from "../pages/Music"

export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "Yoga") {
            return <Yoga />;
        }
        if (currentPage === "Music") {
            return <Music />;
        }
        if (currentPage === "Travel") {
            return <Travel />;
        }
    }


const handlePageChange = (page) => setCurrentPage(page);

return (
    <div style={{ minHeight: "100vh"}}>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}