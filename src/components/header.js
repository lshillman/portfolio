import React from 'react';
import Nav from './Nav';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header">
        <span id="siteTitle">Luke Hillman</span>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
}

export default Header;
