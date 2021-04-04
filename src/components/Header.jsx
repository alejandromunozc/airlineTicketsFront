import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand">Airline Ticket Admin</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
