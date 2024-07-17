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
        <h2 class="Number">To Place an order call: (225)291-9415</h2>
      </div>

      <div style={{ paddingBottom: "50px" }}>
        <MenuSelection />
      </div>
    </>
  );
}

export default Menu;
