/* CSS Imports */
import "../CSS/Menu.css";
import "../CSS/Banner.css";

/* Compnents Imports*/
import NavBar from "../Components/NavBar";
import WhatToRender from "../Components/Menu Stuff/CondinalRender";
import { SideBar } from "../Components/Menu Stuff/SideBarMenu";

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
        <SideBar />
      </div>
      <div>
        <WhatToRender />
      </div>
    </>
  );
}

export default Menu;
