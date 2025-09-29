import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = true;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary pt-4 pb-4 "
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="home">
            Books App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* {userData && ( */}
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll"
              style={{ bsScrollHeight: 100 }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="RecommendedBooks">
                  Recommendations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="author">
                  Author
                </Link>
              </li>

              {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="TopSearch">
              TopSearch
              </Link>
            </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="CategoryPage"
                >
                  CategoryPage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            {user ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="register">
                    Sign Up
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="logout">
                    Sign Out
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
