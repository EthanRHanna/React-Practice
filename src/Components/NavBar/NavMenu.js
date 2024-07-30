import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu } from "semantic-ui-react";
import Cookies from "js-cookie";

export default class NavBarMenu extends Component {
  state = {
    activeItem: Cookies.get("menuState") ? Cookies.get("menuState") : "home",
  };

  handleItemClick = (e, { name }) => {
    //Cookies.set("menuState", name);
    //console.log(Cookies.get("menuState"));
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div id="NavBarMenu">
        <Menu secondary id="NavMenuSelection">
          <Link to={"/"} state={activeItem}>
            <MenuItem
              name="home"
              link
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            ></MenuItem>
          </Link>
          <Link to={"/Menu"} state={activeItem}>
            <MenuItem
              name="menu"
              link
              active={activeItem === "menu"}
              onClick={this.handleItemClick}
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}
