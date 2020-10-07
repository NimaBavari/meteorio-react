import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={window.location.origin + "/img/logo.png"} alt="METEORIO" className="logo" />
      </a>
    </div>
  </nav>
);

export default Navbar;
