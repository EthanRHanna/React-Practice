/* CSS Imports */
import "../CSS/Menu.css";
import "../CSS/Banner.css";

/* Compnents Imports*/
import NavBar from "../Components/NavBar";
import { MenuItem } from "../Components/Menu Stuff/MenuItems";
import SideMenu from "../Components/Menu Stuff/SideBarMenu";
import CreateAccordion from "../Components/Menu Stuff/MenuDropDown";

function Menu() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div class="BannerDiv">
        <img src="" class="BannerImg" />
        <h1 class="BannerWords">Menu</h1>
      </div>

      <div>
        <SideMenu />
      </div>
      <div>
        <CreateAccordion
          title={"Burgers"}
          content={
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
          }
          isActive={false}
          index={0}
        />
        <CreateAccordion
          title={"Burgers"}
          content={
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
          }
          isActive={false}
          index={1}
        />
      </div>
    </>
  );
}

export default Menu;
