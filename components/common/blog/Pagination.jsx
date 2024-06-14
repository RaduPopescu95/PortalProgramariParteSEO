"use client";

import React from "react";

const Pagination = ({
  currentPage = 1,
  totalPages = 3,
  setCurrentPage = 1,
}) => {
  const handleClick = (page, event) => {
    event.preventDefault(); // prevenirea comportamentului default al link-ului
    setCurrentPage(page);
  };

  const pageNumbers = [1, 2, 3];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="page_navigation">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          aria-label="page back"
          className="page-link"
          onClick={(e) => handleClick(currentPage - 1, e)}
          disabled={currentPage === 1}
        >
          <span className="flaticon-left-arrow"></span>
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === currentPage ? "active" : ""}`}
        >
          <a
            className="page-link"
            href="#"
            onClick={(e) => handleClick(number, e)}
          >
            {number}
          </a>
        </li>
      ))}
      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          aria-label="page forward"
          className="page-link"
          onClick={(e) => handleClick(currentPage + 1, e)}
          disabled={currentPage === totalPages}
        >
          <span className="flaticon-right-arrow"></span>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
