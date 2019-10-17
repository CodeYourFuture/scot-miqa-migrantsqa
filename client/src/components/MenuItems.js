import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const MenuItems = ({
  activeItem,
  handleItemClick,
  handleLogout,
  userId
}) => {
  return (
    <React.Fragment as={Menu}>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleItemClick}
        position="left"
        as={Link}
        to="/about"
      />
      {userId && (
        <Menu.Menu position="right">
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={handleItemClick}
            position={"right"}
            as={Link}
            to="/profile"
          />
        </Menu.Menu>
      )}
      {userId && (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleLogout}
          />
        </Menu.Menu>
      )}
      {!userId && (
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            position={"right"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
        </Menu.Menu>
      )}
      {!userId && (
        <Menu.Menu position="right">
          <Menu.Item
            name="register"
            position={"right"}
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      )}
    </React.Fragment>
  );
};
