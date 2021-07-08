import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const BOQ_total = useSelector((state) => state.comp.BOQ_total);
  const Project_total =useSelector(state=>state.comp.Project_total)
  return (
    <nav className="navbar navbar-dark bg-primary text-white justify-content-between px-3">
      <a className="navbar-brand">
      
        &#60;   Blank
      </a>
      <ul className="navbar-nav flex-row">
        <li className="item">BOQ Total: {BOQ_total}/-</li>
        <li className="item">Project Total: {Project_total }/-</li>
        <li>
          BOQ <i className="fas fa-download"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
