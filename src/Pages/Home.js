import "../CSS/Home.css";
import "../CSS/InfoBlocks.css";
import "../CSS/ToolTip.css";
import {
  ButtonContent,
  Button,
  Icon,
  Container,
  Reveal,
  RevealContent,
} from "semantic-ui-react";

function InfoBlocks({ header, info, children }) {
  return (
    //Info Blocks will have a header on the top and info in a box below
    <div className="InfoBlocks">
      <h3>{header}</h3>
      <div className="InnerInfo">{info}</div>
      {children}
    </div>
  );
}

function Home() {
  return (
    <>
      <header className="TopBar">
        <h1>Welcome</h1>
      </header>

      <div className="Blocks">
        <div style={{ display: "inline-block" }}>
          <InfoBlocks
            header={"About"}
            info={
              'We have been opened since 1982 cookiong great food at our downtown location here in Baton Rouge. We moved to our new Siegen location in 2001 and our motto has always been the same "Cook good food, at a reasonable price".'
            }
            className="AboutBlock"
          ></InfoBlocks>

          <InfoBlocks
            header={"Location"}
            info={"10933 Cloverland Ave Baton Rouge 70809"}
            className="LocationBlock"
          >
            <div style={{ paddingTop: "15px" }}>
              <Button
                animated
                className="Directions"
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
        <div style={{ display: "inline-block" }}>
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
            className="ContactBlock"
          ></InfoBlocks>

          <InfoBlocks
            header={"Hours"}
            info={
              <Container>
                <p>
                  We’re open Mon - Sat Fri we're open late <br />
                  10:30AM-3:00PM
                </p>
              </Container>
            }
            className="HoursBlock"
          ></InfoBlocks>
        </div>
      </div>
    </>
  );
}
export default Home;
