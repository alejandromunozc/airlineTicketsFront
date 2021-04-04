import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
//import Footer from "./Footer";
//import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="jumbotron">
        <div className="container p-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
