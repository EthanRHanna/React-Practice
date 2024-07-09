import { Menu, MenuItem } from "semantic-ui-react";
import React, { Component } from "react";
import "../../CSS/SideBarMenu.css";

export default class SideBarMenu extends Component {
  state = { activeItem: "burgers" };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div class="MenuBar">
        <Menu pointing secondary>
          <MenuItem
            name="burgers"
            active={activeItem === "burgers"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="sandwiches"
            active={activeItem === "sandwiches"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="poboys"
            active={activeItem === "poboys"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="boxes"
            active={activeItem === "boxes"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="platters"
            active={activeItem === "platters"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="salads"
            active={activeItem === "salads"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="sides"
            active={activeItem === "sides"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="kidsMenu"
            active={activeItem === "kidsMenu"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
