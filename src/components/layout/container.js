import React, { useState } from "react";
import Home from "../pages/Home"
import Yoga from "../pages/Yoga"
import NavTabs from "./Header";

export default function Container() {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "Yoga") {
            return <Yoga />;
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