import { Menu, MenuItem } from "semantic-ui-react";
import React, { Component, createContext } from "react";
import "../../CSS/SideBarMenu.css";

const sharedState = createContext();

class SideBar extends Component {
  state = { activeItem: "burgers" };
  shareState = { activeMenu: 0 };

  handleItemClick = (e, menuProps) => {
    const { name } = menuProps;

    const { index } = menuProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.shareState = { activeMenu: newIndex };
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const { activeMenu } = this.shareState;

    //console.log(activeMenu);

    return (
      <>
        <sharedState.Provider value={sharedState} />

        <div class="MenuBar">
          <Menu pointing secondary>
            <MenuItem
              name="burgers"
              index={0}
              active={activeItem === "burgers" && activeMenu === 0}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="sandwiches"
              index={1}
              active={activeItem === "sandwiches" && activeMenu === 1}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="poboys"
              index={2}
              active={activeItem === "poboys" && activeMenu === 2}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="boxes"
              index={3}
              active={activeItem === "boxes" && activeMenu === 3}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="platters"
              index={4}
              active={activeItem === "platters" && activeMenu === 4}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="salads"
              index={5}
              active={activeItem === "salads" && activeMenu === 5}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="sides"
              index={6}
              active={activeItem === "sides" && activeMenu === 6}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="kidsMenu"
              index={7}
              active={activeItem === "kidsMenu" && activeMenu === 7}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      </>
    );
  }
}

export { SideBar, sharedState };
