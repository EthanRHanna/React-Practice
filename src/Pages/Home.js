import "../CSS/Home.css";
import "../CSS/InfoBlocks.css";
import "../CSS/ToolTip.css";
import NavBar from "../Components/NavBar";
import Hamburger from "../Images/RSHamburger.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { ButtonContent, Button, Icon, Container } from "semantic-ui-react";

function InfoBlocks({ header, info, children }) {
  return (
    //Info Blocks will have a header on the top and info in a box below
    <div class="InfoBlocks">
      <h3>{header}</h3>
      <div class="InnerInfo">{info}</div>
      {children}
    </div>
  );
}

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <div class="Sections">
        <div class="MainImage">
          <img src={Hamburger} />
        </div>

        <div class="SideStuff">
          <div class="MenuSection">
            <div class="Menu">
              <InfoBlocks header={"Menu"} info={""}>
                <div style={{ paddingTop: "15px" }}>
                  <Link to={"/Menu"}>
                    <Button animated link>
                      <ButtonContent visible>View Our Menu</ButtonContent>
                      <ButtonContent hidden>
                        <Icon name="arrow right" />
                      </ButtonContent>
                    </Button>
                  </Link>
                </div>
              </InfoBlocks>
            </div>
          </div>

          <div class="InfoSection">
            <div class="Blocks">
              <div class="InfoRow">
                <InfoBlocks
                  header={"About"}
                  info={
                    'We have been opened since 1982 cookiong great food at our downtown location here in Baton Rouge. We moved to our new Siegen location in 2001 and our motto has always been the same "Cook good food, at a reasonable price".'
                  }
                  class="AboutBlock"></InfoBlocks>

                <InfoBlocks
                  header={"Location"}
                  info={"10933 Cloverland Ave Baton Rouge 70809"}
                  class="LocationBlock">
                  <div style={{ paddingTop: "15px" }}>
                    <Link
                      to={
                        "http://maps.google.com/?q=10933 Cloverland Ave Baton Rouge 70809"
                      }>
                      <Button animated link>
                        <ButtonContent visible>
                          Get Directions Now
                        </ButtonContent>
                        <ButtonContent hidden>
                          <Icon name="arrow right" />
                        </ButtonContent>
                      </Button>
                    </Link>
                  </div>
                </InfoBlocks>
              </div>
              <div class="InfoRow">
                <InfoBlocks
                  header={"Contact"}
                  info={
                    <>
                      <div style={{ display: "inline-flex", margin: "5px" }}>
                        <div class="tooltip">
                          <Icon circular name="phone" />
                          <span class="tooltiptext">Phone</span>
                        </div>
                        <p>(225)291-9414</p>
                      </div>
                      <br />
                      <div style={{ display: "inline-flex", margin: "5px" }}>
                        <div class="tooltip">
                          <Icon circular name="fax" />
                          <span class="tooltiptext">Fax</span>
                        </div>
                        <p>(225)291-9415</p>
                      </div>
                      <br />
                      <div style={{ display: "inline-flex", margin: "5px" }}>
                        <div class="tooltip">
                          <Icon circular name="mail" />
                          <span class="tooltiptext">Mail</span>
                        </div>
                        <p>riversidepatty@bellsouth.net</p>
                      </div>
                    </>
                  }
                  class="ContactBlock"></InfoBlocks>

                <InfoBlocks
                  header={"Hours"}
                  info={
                    <Container>
                      <p>
                        We’re open Mon - Sat <br />
                        We’re Open Late on Fridays
                        <br />
                        <b>10:30AM-3:00PM</b>
                      </p>
                    </Container>
                  }
                  class="HoursBlock"></InfoBlocks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
