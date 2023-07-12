import React from "react";
import './Pagination.scss'

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
        <div className="current-page">Page: {currentPage}</div>
        <div className="pagination-items">
            {pageNumbers.map(number => (
                <div key={number} className={`pagination-item ${currentPage === number ? "is-active" : ""}`}>
                    <a href="#" onClick={() => paginate(number)} className='link'>
                    {number}
                    </a>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Pagination;