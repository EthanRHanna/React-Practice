import { Component, useContext } from "react";
import { MenuItem } from "../Menu Stuff/MenuItems";
import { sharedState } from "./SideBarMenu";

export default class WhatToRender extends Component {
  static contextType = sharedState;

  render() {
    let test = this.context;
    console.log(test);
    let activeIndex = 0;

    if (activeIndex.value === 0) {
      return (
        <>
          <MenuItem itemName={"Burger"} price={"4.99"} />
          <MenuItem itemName={"Cheeseburger"} price={"5.79"} />
          <MenuItem itemName={"Chilli Cheeseburger"} price={"6.79"} />
          <MenuItem itemName={"Bacon Cheeseburger"} price={"6.79"} />
          <MenuItem itemName={"Mushroom Cheeseburger"} price={"6.79"} />
          <MenuItem itemName={"Patty Melt"} price={"7.59"} />
          <MenuItem itemName={"Jalapeno Cheeseburger"} price={"6.19"} />
          <MenuItem itemName={"Double Burger"} price={"7.95"} />
          <MenuItem itemName={"Barbecue Burger"} price={"5.39"} />
          <MenuItem itemName={"Super Burger"} price={"7.99"} />
          <MenuItem itemName={"Hamburger Steak"} price={"7.59"} />
        </>
      );
    }

    return <p>Nope</p>;
  }
}
