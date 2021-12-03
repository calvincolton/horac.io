import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentUserSelector } from "../../redux/currentUser";

const Header = () => {
  const { currentUser, error } = useSelector(currentUserSelector);

  const renderAuthLinks = () => {
    switch (currentUser) {
      case "dog":
        return;
      case !currentUser:
        return (
          <>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/oauth?type=login" className="nav-link">
                Log in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/oauth?type=signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </>
        );
      default:
        return (
          <>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-products" className="nav-link">
                My Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/log-out" className="nav-link">
                Log out
              </Link>
            </li>
          </>
        );
    }
  };

  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Argentina Yardsale
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">{renderAuthLinks()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
