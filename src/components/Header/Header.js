import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { currentUserSelector } from "../../redux/currentUser";

const Header = () => {
  const { currentUser, error } = useSelector(currentUserSelector);

  const renderAuthLinks = () => {
    switch (currentUser) {
      // don't render anything before fetching current user:
      // case null:
      //   return;
      case "replace with statement above once auth is complete":
        return;
      case currentUser:
        return (
          <Fragment>
            <Nav>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </Nav>
            <Nav>
              <Link to="/my-products" className="nav-link">
                My Products
              </Link>
            </Nav>
            <Nav>
              <Link to="/auth/log-out" className="nav-link">
                Log out
              </Link>
            </Nav>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <Nav>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </Nav>
            <Nav>
              <Link to="/oauth?type=login" className="nav-link">
                Log in
              </Link>
            </Nav>
            <Nav>
              <Link to="/oauth?type=signup" className="nav-link">
                Sign Up
              </Link>
            </Nav>
          </Fragment>
        );
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/" className="navbar-brand">
          Argentina Yardsale
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">{renderAuthLinks()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
