import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector } from "../../redux/currentUser";

const Header = () => {
  const { currentUser, error } = useSelector(currentUserSelector);

  return <div className="container header">Header</div>;
};

export default Header;
