import { MenuItem } from "../Menu Stuff/MenuItems";
import "../../CSS/MenuGroups.css";
import { Container, Segment, SegmentGroup } from "semantic-ui-react";

export default function MenuGroup({ contextIndex }) {
  //console.log(contextIndex);

  switch (contextIndex) {
    case "combos":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"Burger"} price={"8.97"} />
            <MenuItem itemName={"Fish Burger"} price={"8.97"} />
            <MenuItem itemName={"Chicken Samwich"} price={"8.97"} />
          </div>

          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                Note: All Combos come with Fries & a Small Drink
              </h3>
            </div>
          </div>
        </>
      );

    case "burgers":
      return (
        <>
          <div class="menu">
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
          </div>

          <div class="Notes">
            <div class="Note">
              <b>All Burgers are 1/2lb after cooking and dressed</b>
            </div>
            <div class="Note">
              <b>
                All Burgers come dressed with Mayonnaise, Mustard, Lettuce,
                Tomatoes, Pickles, and Onions
              </b>
            </div>
          </div>
        </>
      );

    case "sandwiches":
      return (
        <>
          <div class="menu">
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
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                All Sandwiches are Dressed with Mayonnaise, Lettuce, Tomatoes,
                and Pickles
              </h3>
            </div>
          </div>
        </>
      );

    case "poboys":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"Turkey and Swiss"} price={"7.49"} />
            <MenuItem itemName={"Chicken Breast"} price={"7.49"} />
            <MenuItem itemName={"Hot Sausage"} price={"7.49"}>
              <p
                style={{
                  fontSize: "15px",
                }}>
                Link or Patty
              </p>
            </MenuItem>
            <MenuItem itemName={"Ham and Cheese"} price={"7.49"} />
            <MenuItem itemName={"Roast Beef"} price={"7.49"} />
            <MenuItem itemName={"Meatball"} price={"7.49"} />
            <MenuItem itemName={"Italian Sausage"} price={"7.49"} />
            <MenuItem itemName={"Fish"} price={"7.69"} />
            <MenuItem itemName={"Shrimp"} price={"7.69"} />
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                All PoBoys are dressed with Mayonnaise, Lettuce, Tomatoes, and
                Pickles
              </h3>
            </div>
          </div>
        </>
      );

    case "chicken boxes":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"3 PC Chicken Tender Box"} price={"6.59"} />
            <MenuItem itemName={"6 PC Chicken Tender Box"} price={"8.99"} />
          </div>
        </>
      );

    case "seafood platters":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"Fish Basket"} price={"8.99"} />
            <MenuItem itemName={"Shrimp Basket"} price={"8.99"} />
            <MenuItem
              itemName={"Fried Fish Topped with Crawfish Etouffee"}
              price={"9.29"}
            />
            <MenuItem itemName={"Fish Plate Dinner"} price={"12.99"}>
              <p
                style={{
                  fontSize: "15px",
                }}>
                Served with Small Salad
              </p>
            </MenuItem>
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                All Platters come with Fries
              </h3>
            </div>
          </div>
        </>
      );

    case "salads":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"Dinner Salad"} price={"3.29"} />
            <MenuItem itemName={"Chef Salad"} price={"8.49"} />
            <MenuItem itemName={"Fried Chicken Salad"} price={"8.49"} />
            <MenuItem itemName={"Grilled Chicken Salad"} price={"8.49"} />
            <MenuItem itemName={"Fried Shimp Salad"} price={"9.99"} />
            <MenuItem itemName={"Grilled Shrimp Salad"} price={"9.99"} />
            <MenuItem itemName={"Grilled Tilapia Salad"} price={"9.99"} />
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                Avilable Dressings Include: Thousand Island, Ranch, Fat Free
                Ranch, Italian, Low Calorie Italian, and Blue Cheese
              </h3>
            </div>
          </div>
        </>
      );

    case "sides":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"French Fries"} price={"2.39"} />
            <MenuItem itemName={"Cajun Curly Q's"} price={"2.99"} />
            <MenuItem itemName={"Onion Tanglers"} price={"2.69"} />
            <MenuItem itemName={"Tater Tots"} price={"2.99"} />
            <MenuItem itemName={"Sweet Potato Fries"} price={"2.99"} />
            <MenuItem itemName={"Breaded Mushrooms"} price={"3.29"} />
            <MenuItem itemName={"Fried Pickles"} price={"3.29"} />
            <MenuItem itemName={"Fried Jalapenos"} price={"3.29"} />
            <MenuItem itemName={"Fried Okra"} price={"3.29"} />
            <MenuItem itemName={"Chili & Cheese Fries"} price={"3.99"} />
            <MenuItem itemName={"Mozzarella Sticks (8)"} price={"4.19"} />
            <MenuItem itemName={"Stuffed Jalapenos (Cheese)"} price={"4.19"} />
            <MenuItem itemName={"Crawfish Pie"} price={"4.19"} />
            <MenuItem itemName={"Meat Pie"} price={"4.19"} />
            <MenuItem itemName={"Corn Nuggets"} price={"4.19"} />
            <MenuItem itemName={"Mac 'N' Cheese Fritters"} price={"4.19"} />
            <MenuItem itemName={"Fried Green Beans"} price={"4.19"} />
            <MenuItem itemName={"Fried Broccoli"} price={"4.19"} />
            <MenuItem itemName={"Boudin Balz"} price={"4.19"} />
            <MenuItem itemName={"Gator Balz"} price={"4.19"} />
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                Avilable Cheese: American, Swiss, Chedder, Pepper Jack
              </h3>
            </div>
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>
                Avilable Bread & Bun: White, Texes Toast, Wheat Bun or Toast,
                Rye, and Sour Dough
              </h3>
            </div>
          </div>
        </>
      );

    case "drinks":
      return (
        <>
          <h3 style={{ textAlign: "center" }}></h3>
          <div class="menu"></div>
        </>
      );

    case "kidsMenu":
      return (
        <>
          <div class="menu">
            <MenuItem itemName={"Hamburger"} price={"4.19"} />
            <MenuItem itemName={"Fish Sticks"} price={"4.19"} />
            <MenuItem itemName={"Grilled Cheese"} price={"4.19"} />
            <MenuItem itemName={"Chicken Tenders"} price={"4.19"} />
            <MenuItem itemName={"Corn Dog"} price={"4.19"} />
          </div>
          <div class="Notes">
            <div class="Note">
              <h3 style={{ textAlign: "center" }}>Dine in only (12 & Under)</h3>
            </div>
            <div class="Note">
              <h2 style={{ textAlign: "center" }}>
                All options come with Fries
              </h2>
            </div>
          </div>
        </>
      );

    default:
      return (
        <div style={{ textAlign: "center", margin: "15px", padding: "15px" }}>
          <h1>Oops!</h1>
          <h2>We Can Not Find that Menu Section</h2>
        </div>
      );
  }
}
