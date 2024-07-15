/* CSS Imports */
import "../CSS/Menu.css";
import "../CSS/Banner.css";

/* Compnents Imports*/
import NavBar from "../Components/NavBar";

import MenuSelection from "../Components/Menu Stuff/MenuSelection";

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
        <MenuSelection />
      </div>
    </>
  );
}

export default Menu;
