import React from "react";
import "./Ladingpage.css";
import { Container, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Frame 427319569.png";
import roundarrow from "../assets/Frame 427319404.png";
import learnmore from "../assets/Frame 427319405.png";
import robohand from "../assets/Group 1707486126.png";
import sideposerobo from "../assets/Group 1707486124.png";
import robo1 from "../assets/Rectangle 9.png";
import ML1 from "../assets/Frame 427319411.png";
import ML2 from "../assets/Frame 427319412.png";
import ML3 from "../assets/Frame 427319413.png";
import ML4 from "../assets/Frame 427319414.png";
import robo2 from "../assets/Rectangle 10.png";
import robo3 from "../assets/Rectangle 13.png";
import robo4 from "../assets/Rectangle 12.png";
import team1 from "../assets/Group 1707486129.png";
import team2 from "../assets/Group 1707486131.png";
import team3 from "../assets/teamimag3.svg";
import arrow from "../assets/Frame 427319416.png";
import profile from "../assets/Ellipse 22.png";
import profile2 from "../assets/Ellipse 10.png";
import greendot from "../assets/Ellipse 12.png";
import colon from "../assets/Group 1707486119.png";
import Premiumimg from "../assets/Frame 427319505.png";
import Accordion from "react-bootstrap/Accordion";
import ICchip from "../assets/Group 1707486136.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import gadget from "../assets/Group 1707486135.png";
import roboface from "../assets/Group 1707486148.png";
import socialapps from "../assets/Frame 427319565.png";
import robo5 from "../assets/Rectangle 39.png";
import robo6 from "../assets/Rectangle 43.png";
import robo7 from "../assets/Rectangle 52.png";
import handwithglob from "../assets/Group 1707486127.png";
import artificialrobo from "../assets/Rectangle 31.png";

const roboimages = [robo1, robo2, robo3, robo4];
const machineimges = [ML1, ML2, ML3, ML4];
const roboInsightimages = [robo1, robo5, robo6, robo7];
const numbers = [234, 712, 850, 234];
const teamimges = [team1, team2, team3];
const profileimges = [profile, profile2];
const repeatCount = 2;

function Ladingpage() {
  return (
    <div className="bg-text">
      {/* navbar */}
      <Navbar expand="lg" className="bg-stlying">
        <Container className="inner-text">
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#abuto">About</Nav.Link>
              <Nav.Link href="#Service">Service</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Plan">Plan</Nav.Link>
            </Nav>
            {/* <div className="nav-stlying"> */}
            <button className="contact-us">Contact Us</button>
            {/* </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-landing-page">
        {/* mainpage */}
        <Container fluid>
          <Row className="inner-landing-page d-flex align-items-center">
            <Col className="main-LHS-div">
              <h3>
                Let’s Horizon
                <span> Robotics </span>Handle It,
              </h3>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document.{" "}
              </p>
              <div className="learn-div">
                <div>
                  <img src={roundarrow} />
                </div>
                <div>
                  <img src={learnmore} />
                </div>
              </div>
            </Col>
            <Col className="imges-adjustment">
              <img src={sideposerobo} className="side-pose-robo" />
            </Col>
          </Row>
        </Container>
        {/* services */}
        <Container>
          <Row className="d-flex align-items-center">
            <Col className="imges-adjustment">
              <img src={robohand} />
            </Col>
            <Col className="services">
              <h4>Services</h4>
              <h2>
                Promising Care:
                <br />
                <span>Right At Home</span>{" "}
              </h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document.{" "}
              </p>
            </Col>
          </Row>
        </Container>
        {/* 4services */}
        <Container>
          <Row className="main-services-cards">
            {roboimages.map((imageSrc, index) => (
              <Col className="cards-services" key={index}>
                <div className="robo-1234">
                  <img src={imageSrc} />
                </div>
                <div>
                  <img src={machineimges[index]} />
                  <p className="machine-learn">Machine Learning</p>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder.{" "}
                  </p>
                  <img src={arrow} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="bg-img">
        <Row className="card-likes-row">
          {Array.from({ length: numbers.length }).map((_, index) => (
            <Col className="likes-card" key={index}>
              <h3>
                {numbers[index]} <span>+</span>
              </h3>
              <p>Services</p>
            </Col>
          ))}
        </Row>
      </div>
      {/* about us */}
      <Container className="about" fluid>
        <Row className="bout-row">
          <Col className="about-col">
            <h2>About Us</h2>
            <h4>
              Empowering <span> People</span> By Keeping Them Well
            </h4>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.{" "}
            </p>
            <div>
              <div className="about-us-machine-stlying ">
                <div>
                  <img src={ML1} />
                </div>
                <div className="about-us-machine-learning">
                  <h2>Machine Learning</h2>
                  <h4>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly .{" "}
                  </h4>
                </div>
              </div>
              <div className="about-us-machine-stlying">
                <div>
                  <img src={ML3} />
                </div>
                <div className="about-us-machine-learning">
                  <h2>Machine Learning</h2>
                  <h4>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly .{" "}
                  </h4>
                </div>
              </div>
            </div>
            <button className="click-here">Click Here</button>
          </Col>
          <Col className="roohand">
            <img src={handwithglob} />
          </Col>
        </Row>
      </Container>
      <Container className="artifiial-cont" fluid>
      <Row className="about-end-cont">
        <Col className="ai-robo-img">
          <img src={artificialrobo} alt="" />
        </Col>
        <Col className="ai-text">
          <h3>
            Artificial Intelligence Is The New Big Thing In{" "}
            <span> Technology</span>
          </h3>
          <button className="click-here">Click Here</button>
        </Col>
      </Row>
      </Container>
      {/* team */}
      <div className="team-main-div">
        {/* <div className="bg-black"> */}
        <Container fluid className="">
          <div className="team-titles">
            <h4>Team</h4>
            <h2>
              Our Certified <span>Scientists</span> With <br /> Smart Solutions
            </h2>
          </div>
          <Row className="team-row">
            {teamimges.map((img, index) => (
              <Col key={index} className="team-card-stying">
                <img src={img} />
              </Col>
            ))}
          </Row>
        </Container>
        {/* testimonial */}
        <Container>
          <div>
            <h4>Testimonial</h4>
            <h2>
              Succour The <span> Customer Better</span>
            </h2>
            <p className="para-stlying">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly .{" "}
            </p>
          </div>
          <Row className="testimonial-row">
            {profileimges.map((imges, index) => (
              <Col key={index} className="testimonial-crd">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document.{" "}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img src={imges} />
                  </div>
                  <div>
                    <img src={colon} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {/* projects */}
        <Container>
          <div>
            <h4>Projects</h4>
            <h2>
              Our <span> Projects</span>
            </h2>
          </div>
          <Row className="project-row">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <React.Fragment key={index}>
                <Col className="electronic-gadgets">
                  <div>
                    <img src={gadget} className="gadget" alt={`Gadget ${index + 1}`} />
                  </div>
                  <div className="testimonial-text">
                    <h4>Testimonial</h4>
                    <p className="project">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly{" "}
                    </p>
                    <img src={arrow} alt={`Arrow ${index + 1}`} />
                  </div>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>
        {/* pricing plan */}
        <Container>
          <div>
            <h4>Pricing Plan</h4>
            <h2>
              Our <span> Pricing Plan</span>
            </h2>
          </div>
          <Row className="pricing-row">
            {profileimges.map((imges, index) => (
              <Col key={index} className="pricing-crd">
                <img src={Premiumimg} />
                <p>Premium</p>
                <h3>
                  2.99 <span> $</span>
                </h3>

                <div className="publish">
                  <img src={greendot} />
                  <p className="m-0">In publishing and graphic </p>
                </div>
                <div className="publish">
                  <img src={greendot} />
                  <p className="m-0">In publishing and graphic </p>
                </div>
                <div className="publish">
                  <img src={greendot} />
                  <p className="m-0">In publishing and graphic </p>
                </div>
                <div className="publish">
                  <img src={greendot} />
                  <p className="m-0">In publishing and graphic </p>
                </div>
                <button className="qoute-btn">Get a Quote</button>
              </Col>
            ))}
          </Row>
        </Container>
        {/* FAQ */}
        <Container>
          <Row className="faq-row">
            <Col className="faq-col">
              <h4>FAQ</h4>
              <h2>
                How Are Robots <span> Enhansing </span>Health Care
              </h2>
              <div className="lorem">
                <h3>1. What is Lorem Ipsum?</h3>
              </div>
              <p className="lorem-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document.{" "}
              </p>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. What is Lorem Ipsum?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. What is Lorem Ipsum?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. What is Lorem Ipsum?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col className="icchip">
              <img src={ICchip}  />
            </Col>
          </Row>
        </Container>
        {/* contact */}
        <Container>
          <Row className="contact-row">
            <Col className="contact-robo-hand">
              <img src={robohand} />
            </Col>
            <Col className="In-Sight-col">
              <h2>Contact</h2>
              <h4>
                Be Well Stay Calm And <span> Keep In Touch</span>
              </h4>
              <div className="info-main-box">
                <Row>
                  <Col className="input-stlying">
                    <input type="text" placeholder="First Name" />
                  </Col>
                  <Col className="input-stlying">
                    <input type="text" placeholder="Last Name" />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-stlying">
                    <input type="text" placeholder="Email" />
                  </Col>
                  <Col className="input-stlying">
                    <input type="text" placeholder="Phone Number" />
                  </Col>
                </Row>
                <Col className="input-stlying-message">
                  <input type="text" placeholder="Message" />
                </Col>
                <button className="submit">Submit</button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* in Sight */}
        <div className="In-Sight-col">
          <h2>In Sight</h2>
          <h4>
            Tapping <span> Intelligence</span> Through Talent.
          </h4>
          <Row className="main-services-cards">
            {roboInsightimages.map((imageSrc, index) => (
              <Col className="cards-services" key={index}>
                <div className="robo-1234">
                  <img src={imageSrc} />
                </div>
                <div className="cobot-text">
                  <h3>Cobot Success Stories</h3>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder.{" "}
                  </p>
                  <img src={arrow} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {/* </div> */}
      </div>
      {/* review............... */}
      {/* new letter */}
      <Container className="bg-stlying-end-div" fluid>
        <Row className="news-letter-row">
          <Col className="news-letter-col">
            <h2>News Letter</h2>
            <h4>
              Subscribe To Our <span> Newsletter</span>
            </h4>
            <InputGroup className="mb-3 mail-div">
              <Form.Control
                placeholder="Enter Your Message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col className="news-letter-col-rhs">
            <img src={roboface} alt="" />
          </Col>
        </Row>
      </Container> 
      {/* footer */}
      <Container className="p-0" fluid>
        <div className="footer">
          <div className="ul-li-stlying">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
              <li>Plan</li>
            </ul>
          </div>
          <div className="footer-end">
            <div>
              <img src={socialapps} />
            </div>
            <div>
              <p className="copy-right">
                Copyright © 2024 Botmindz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ladingpage;
