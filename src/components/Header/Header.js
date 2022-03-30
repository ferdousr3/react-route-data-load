import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import'./Header.css'

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <CustomLink to="/">Home </CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
