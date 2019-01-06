import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Blog")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Career")}
        className={
          props.currentPage === "Career" ? "nav-link active" : "nav-link"
        }
      >
        Career
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Donate")}
        className={
          props.currentPage === "Donate" ? "nav-link active" : "nav-link"
        }
      >
        Donate
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Follow")}
        className={
          props.currentPage === "Follow" ? "nav-link active" : "nav-link"
        }
      >
        Follow
      </a>
    </li>
  </ul>
);

export default NavTabs;
