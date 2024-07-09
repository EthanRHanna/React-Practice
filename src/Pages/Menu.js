/* CSS Imports */
import "../CSS/Menu.css";
import "../CSS/Banner.css";

/* Compnents Imports*/
import NavBar from "../Components/NavBar";

import Banner from "../Images/RSCounter.jpg";

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
      <div class="SelectionMenu"></div>
    </>
  );
}

export default Menu;
