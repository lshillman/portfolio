import React from 'react';
import Nav from './Nav';

function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <span className="siteTitle">Luke Hillman</span>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
}

export default Header;
