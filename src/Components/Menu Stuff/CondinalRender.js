import { MenuItem } from "../Menu Stuff/MenuItems";

export default function WhatToRender({ contextIndex }) {
  //console.log(contextIndex);

  switch (contextIndex) {
    case "burgers":
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

    case "sandwiches":
      return (
        <>
          <MenuItem itemName={"Fried Chicken Breast"} price={"5.74"} />
          <MenuItem itemName={"Grilled Chicken Breast"} price={"5.74"} />
          <MenuItem itemName={"Turkey and Swiss"} price={"4.99"} />
          <MenuItem itemName={"Ham and Swiss"} price={"4.99"} />
          <MenuItem itemName={"Hot Sausage"} price={"4.99"} />
          <MenuItem itemName={"Italian Sausage"} price={"7.19"} />
          <MenuItem itemName={"BLT"} price={"4.99"} />
          <MenuItem itemName={"Club"} price={"6.19"} />
          <MenuItem itemName={"Roast Beef"} price={"4.99"} />
          <MenuItem itemName={"Fish"} price={"5.44"} />
          <MenuItem itemName={"MeatBall"} price={"7.49"} />
          <MenuItem itemName={"GrilledCheese"} price={"3.49"} />
        </>
      );

    case "poboys":
      return (
        <>
          <MenuItem itemName={"Fried Chicken Breast"} price={"7.49"} />
          <MenuItem itemName={"Grilled Chicken Breast"} price={"7.49"} />
          <MenuItem itemName={"Turkey and Swiss"} price={"7.49"} />
          <MenuItem itemName={"Ham and Swiss"} price={"7.49"} />
          <MenuItem itemName={"Hot Sausage"} price={"7.49"} />
          <MenuItem itemName={"Roast Beef"} price={"7.49"} />
          <MenuItem itemName={"Fish"} price={"7.99"} />
        </>
      );

    case "boxes":
      return (
        <>
          <MenuItem itemName={"Shimp Box"} price={"8.99"} />
          <MenuItem itemName={"Fish Box"} price={"8.99"} />
          <MenuItem itemName={"3 PC Chicken Tender Box"} price={"6.59"} />
          <MenuItem itemName={"6 PC Chicken Tender Box"} price={"8.99"} />
        </>
      );

    case "platters":
      return (
        <>
          <MenuItem
            itemName={"Mixed Platter (Shrimp and Fish)"}
            price={"7.49"}
          />
          <MenuItem itemName={"Fish Platter"} price={"7.49"} />
          <MenuItem
            itemName={"Fried Fish Topped with Crawfish Etouffee"}
            price={"7.49"}
          />
        </>
      );

    case "salads":
      return (
        <>
          <MenuItem itemName={"Fried Chicken Salad"} price={"9.35"} />
          <MenuItem itemName={"Grilled Chicken Salad"} price={"9.35"} />
          <MenuItem itemName={"Chef Salad"} price={"9.35"} />
          <MenuItem itemName={"Shimp Salad"} price={"9.99"} />
          <MenuItem itemName={"Grilled Tilapia Salad"} price={"9.99"} />
        </>
      );

    case "sides":
      return (
        <>
          <MenuItem itemName={"French Fries"} price={"2.39"} />
          <MenuItem itemName={"Sweet Potato Fries"} price={"2.99"} />
          <MenuItem itemName={"Tater Tots"} price={"2.99"} />
          <MenuItem itemName={"Cajun Curly Q's"} price={"2.99"} />
          <MenuItem itemName={"Thin Onion Tanglers"} price={"2.69"} />
          <MenuItem itemName={"Fried Green Beans"} price={"3.29"} />
          <MenuItem itemName={"Fried Pickles"} price={"3.29"} />
          <MenuItem itemName={"Fried Corn Nuggets"} price={"3.29"} />
          <MenuItem itemName={"Fried Okra"} price={"3.29"} />
          <MenuItem itemName={"Fried Mushroom"} price={"3.29"} />
          <MenuItem itemName={"Mac 'N' Cheese Fritters"} price={"3.29"} />
          <MenuItem itemName={"Cheese Sticks"} price={"4.19"} />
          <MenuItem itemName={"Crawfish Pie"} price={"4.19"} />
          <MenuItem itemName={"Meat Pie"} price={"4.19"} />
          <MenuItem itemName={"Boudin Balz"} price={"4.19"} />
          <MenuItem itemName={"Gator Balz"} price={"4.19"} />
        </>
      );

    case "kidsMenu":
      return (
        <>
          <MenuItem itemName={"Hamburger"} price={""} />
          <MenuItem itemName={"Fish Sticks"} price={""} />
          <MenuItem itemName={"Grilled Cheese"} price={""} />
          <MenuItem itemName={"Chicken Tenders"} price={""} />
          <MenuItem itemName={"Corn Dog"} price={""} />
        </>
      );

    default:
      return "Error Can Not Find Menu Section";
  }
}
