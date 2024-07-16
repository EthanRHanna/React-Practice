import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu } from "semantic-ui-react";
import Cookies from "js-cookie";

export default class NavBarMenu extends Component {
  state = { activeItem: Cookies.get("menuState") };

  handleItemClick = (e, { name }) => {
    Cookies.set("menuState", name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <MenuItem
          name="home"
          link
          active={activeItem === "home"}
          onClick={this.handleItemClick}>
          <Link to={"/"} state={activeItem}>
            Home
          </Link>
        </MenuItem>
        <MenuItem
          name="menu"
          link
          active={activeItem === "menu"}
          onClick={this.handleItemClick}>
          <Link to={"/Menu"} state={activeItem}>
            Menu
          </Link>
        </MenuItem>
      </Menu>
    );
  }
}
