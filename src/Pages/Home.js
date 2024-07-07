import "../CSS/Home.css";
import "../CSS/InfoBlocks.css";
import "../CSS/ToolTip.css";
import Hamburger from "../Images/RSHamburger.jpg";
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
      <header class="TopMenu">
        <div style={{ display: "flex" }}>
          <img
            src="https://static.wixstatic.com/media/41d000_af9107ca34395bbad48890262d578148.png/v1/fill/w_311,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_af9107ca34395bbad48890262d578148.png"
            class="IconImage"
          />
          <h1
            style={{
              marginLeft: "20px",
              marginBottom: "15px",
              fontSize: "45px",
            }}
          >
            RiverSide Patty
          </h1>
        </div>
        <div>
          <a href="https://www.facebook.com/p/Riverside-patty-100081724278918/">
            <Icon inverted color="blue" circular name="facebook f" link></Icon>
          </a>
        </div>
      </header>

      <div class="TopImage">
        <img src={Hamburger} class="TopImage" />
      </div>

      <div class="InfoSection">
        <div class="Blocks">
          <div class="InfoRow">
            <InfoBlocks
              header={"About"}
              info={
                'We have been opened since 1982 cookiong great food at our downtown location here in Baton Rouge. We moved to our new Siegen location in 2001 and our motto has always been the same "Cook good food, at a reasonable price".'
              }
              class="AboutBlock"
            ></InfoBlocks>

            <InfoBlocks
              header={"Location"}
              info={"10933 Cloverland Ave Baton Rouge 70809"}
              class="LocationBlock"
            >
              <div style={{ paddingTop: "15px" }}>
                <Button
                  animated
                  as="a"
                  href="http://maps.google.com/?q=10933 Cloverland Ave Baton Rouge 70809"
                >
                  <ButtonContent visible>Get Directions Now</ButtonContent>
                  <ButtonContent hidden>
                    <Icon name="arrow right" />
                  </ButtonContent>
                </Button>
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
              class="ContactBlock"
            ></InfoBlocks>

            <InfoBlocks
              header={"Hours"}
              info={
                <Container>
                  <p>
                    We’re open Mon - Sat Fri we're open late <br />
                    <b>10:30AM-3:00PM</b>
                  </p>
                </Container>
              }
              class="HoursBlock"
            ></InfoBlocks>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
