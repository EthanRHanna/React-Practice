import "../CSS/NavBar.css";
import { Icon } from "semantic-ui-react";
import NavBarMenu from "./NavBar/NavMenu";

function NavBar() {
  return (
    <>
      <div class="TopMenu">
        <div style={{ display: "flex" }}>
          <img
            src="https://static.wixstatic.com/media/41d000_af9107ca34395bbad48890262d578148.png/v1/fill/w_311,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_af9107ca34395bbad48890262d578148.png"
            class="IconImage"
          />
          <h1
            style={{
              marginLeft: "20px",
              fontSize: "45px",
            }}>
            RiverSide Patty
          </h1>
        </div>
        <div class="PageLinks">
          <NavBarMenu />
        </div>

        <div>
          <a href="https://www.facebook.com/p/Riverside-patty-100081724278918/">
            <Icon inverted color="blue" circular name="facebook f" link></Icon>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
