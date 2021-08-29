import React, { Component } from "react";
import "./Component.css";
import { Container, Row, Col } from "react-grid-system";
import {
  Link
} from "react-router-dom";

class Explorelinks extends Component {
  render() {
    return (
        <Container className="exploree">
				      <div className="explorelinks">
          <Row>
            <Col sm={4} className="animate0">
              <h5 className="manifesto linkheader">HIGHLIGHTS</h5>
              <p className="p-manifesto">
                <b>
                  <a href="https://www.devpost.com/software/corex">
                    CoreX - E-commerce Hack
                  </a>
                </b>
                <br />
                Peddie Hacks Winner E-Commerce Hack<br />
                <br />
                <b>
                  <a href="https://www.heyrajan.com/ventures">
                    160km Run For Hope
                  </a>
                </b>
                <br />
                Running 160km for Residential School Graves
                <br />
                <br />
                          <Link to="/staywoke">
                  <b>My First Talk</b> @staywokeevent
                  <br />
                </Link>
                My very first talk ~ Living Life
                <br />
                <br />
                <b>
                  <a href="https://www.heyrajan.com">
                    The Release of my Personal Website
                  </a>
                </b>
                <br />
                Check it out! You're on it right now :0
								
              </p>
            </Col>
            <Col sm={4} className="animate1">
              <h5 className="manifesto linkheader">SOCIALS</h5>
              <p className="p-manifesto">
                <b>
                  <a href="g.heyrajan.com">
                    Github
                  </a>
                </b>
                <br />
                Projects, Shipping and Stargazing
                <br />
                <br />
                <b>
                  <a href="https://www.hackclub.com/slack">
                    Hack Club Slack
                  </a>
                </b>
                <br />
                Find me in the #cult-of-rajan!
                <br />
                <br />
                <a href="http://www.ig.heyrajan.com">
                  <b>Instagram</b>
                  <br />
                </a>
                Dog photos, Running updates and Perks!
								<br /><br />
								<a href="http://www.t.heyrajan.com">
                  <b>Twitter</b>
                  <br />
                </a>
                Politics, Marvel Theories and VIP codes
              </p>
            </Col>
            <Col sm={4} className="animate2">
              <h5 className="manifesto linkheader">CONTACT</h5>
              <p className="p-manifesto">
                <b>
                  <a href="mailto:rajanagarwal.rsa@gmail.com">
                    rajanagarwal.rsa@gmail.com
                  </a>
                </b>
                <br />
                Professional Inquiries Only<br />
                <br />
                <b>
                  <a href="https://www.polywork.com/rajan">
                    Polywork
                  </a>
                </b>
                <br />
                A simple, yet powerful portfolio
                <br />
                <br />
                <a href="http://www.in.heyrajan.com">
                  <b>Linkedin</b>
                  <br />
                </a>
                Work experience and Business Inquiries
                <br />
                <br />
                <b>
                  <a href="https://www.discord.com/app">
                    Discord @fellowintellectual#9191
                  </a>
                </b>
                <br />
                Hackathons and Freelancing
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="animate3">
              <h5 className="manifesto linkheader">QUICK EXPLORE</h5>
              <p className="p-manifesto">
                <b>
                  <a href="https://www.sb.heyrajan.com">
                    Hack Club Scrapbook
                  </a>
                </b>
                <br />
                Build Updates directly from Hack Club<br />
                <br />
                <b>
                  <a href="https://www.d.heyrajan.com">
                    Devpost
                  </a>
                </b>
                <br />
                A collection of hackathon projects
                <br />
                <br />
                <a href="https://www.heyrajan.com">
                  <b>Breaking Barriers</b>
                  <br />
                </a>
                A Novel of Hope and Future
              </p>
            </Col>
            <Col sm={4} className="animate4">
              <h5 className="manifesto linkheader">HACKATHONS</h5>
              <p className="p-manifesto">
                <b>
                  <a href="https://www.devpost.com/software/corex">
                    CoreX - Supercharging Small Businesses
                  </a>
                </b>
                <br />
                Winner Fintech & E-commerce
                <br /><br />
                <b>
                  <a href="https://www.devpost.com/software/growify">
                    Growify - Digitizing Agriculture
                  </a>
                </b>
                <br />
                3rd Place Overall
                <br />
                <br />
                <a href="https://www.devpost.com/software/swiftmed">
                  <b>SwiftMed</b>
                  <br />
                </a>
                Best Crypto Hack
              </p>
            </Col>
            <Col sm={4} className="animate5">
              <h5 className="manifesto linkheader">ARTICLES</h5>
              <p className="p-manifesto">
                <b>
                  <a href="https://medium.com/junior-economist/op-ed-the-trillionaire-paradox-when-ai-meets-entrepreneurship-823b8c03b674">
                    Op-Ed: The Trillionaire Paradox. When AI Meets Entrepreneurship
                  </a>
                </b><br />
                <br />
                <b>
                  <a href="https://medium.com/international-junior-economist/migration-to-the-lone-star-state-45dab6c65764?source=user_profile---------3----------------------------">
                    Migration To The Lone Star State
                  </a>
                </b><br />
                <br />
								<b>
                  <a href="https://medium.com/junior-economist/why-social-media-has-chosen-the-next-world-leader-24abbbdd0bdd">
                    How Social Media has Chosen the Next Leader
                  </a>
                </b><br />
								<br />
								<a href="https://itsrajanagarwal.medium.com/" className="a">Read More On Medium</a>
              </p>
            </Col>
          </Row>
					      </div>
        </Container>

    );
  }
}

export default Explorelinks;
