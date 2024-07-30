import { Menu, MenuItem } from "semantic-ui-react";
import React, { Component, createContext, useState } from "react";
import "../../CSS/MenuSelection.css";
import MenuGroup from "./MenuGroups";

const sharedState = createContext();

class SideBarMenu extends Component {
  state = { activeItem: "burgers" };

  handleItemClick = (e, menuProps) => {
    const { name } = menuProps;

    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <div class="MenuBar">
          <Menu pointing secondary>
            <MenuItem
              name="burgers"
              index={0}
              active={activeItem === "burgers"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="sandwiches"
              index={1}
              active={activeItem === "sandwiches"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="poboys"
              index={2}
              active={activeItem === "poboys"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="chicken boxes"
              index={3}
              active={activeItem === "chicken boxes"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="seafood platters"
              index={4}
              active={activeItem === "seafood platters"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="salads"
              index={5}
              active={activeItem === "salads"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="sides"
              index={6}
              active={activeItem === "sides"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="kidsMenu"
              index={7}
              active={activeItem === "kidsMenu"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>

        <sharedState.Provider value={activeItem}>
          <MenuGroup contextIndex={activeItem} />
        </sharedState.Provider>
      </>
    );
  }
}

export default SideBarMenu;
