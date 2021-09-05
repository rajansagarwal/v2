import React, { Component } from "react";
import "./Component.css";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    return (
      <Container className="exploree">
				      <div className="explorelinks">
          <Row>
            <Col sm={2.5}>
              
            </Col>
            <Col sm={7} className="animate0">
              <h5 className="manifesto linkheader">Objective</h5>
              <p className="p-manifesto">
                  Rajan Agarwal is a 16 year old student leader based out of Ontario, Canada. He brings proven experience in time management, internal affairs and innovation through creative mediums. Rajan aspires to bridge the gap between biomedical engineering and artificial intelligence in his career. 
                <br />
                <br />
                <b>
                  <Link to="/">
                    Read More.
                  </Link>
                </b>
              </p>
            </Col>
            <Col sm={2.5}>
              
            </Col>
          </Row>
           <Row>
            <Col sm={2.5}></Col>
            <Col sm={7} className="animate1">
              <h5 className="manifesto linkheader">Education</h5>
              <p className="p-manifesto">
               <b>
                <a href="https://www.peelschools.org/schools/turnerfenton/Pages/default.aspx">
              Turner Fenton Secondary School
               </a>
               </b>
             <br />
              <i>Sep 2019 - Present</i> • International Baccelaureate / Honour Roll<br />
             <br />
						 <b>
                <a href="https://spiritofmath.com/">
              Spirit of Math Schools 
               </a>
               </b>
             <br />
              <i>Sep 2011 - April 2021</i> • Advanced Mathematics Program / Honour Roll<br />
             <br />
						 <b>
                <a href="https://www.peelschools.org/schools/centennial/Pages/default.aspx">
              Centennial Senior Public School
               </a>
               </b>
             <br />
              <i>Sep 2016 - June 2019</i> • Science & Technology Regional Program / PDSB Award of Distintion<br />
             <br />
						 </p>
            </Col>
            <Col sm={2.5}></Col>
          </Row>
					<Row>
            <Col sm={2.5}></Col>
            <Col sm={7} className="animate1">
              <h5 className="manifesto linkheader">Work Experience</h5>
              <p className="p-manifesto">
               <b>
                <a href="https://instagram.com/_mindson">
              Executive Vice President, Minds On
               </a>
               </b>
             <br />
              <i>Sep 2020 - Sep 2021</i><br />
							Building up our digital presence, marketing research and project planning. Lead development for Peel Mental Health Summit and Podcast. Currently working on expanding leadership team.
             <br /><br />
						 
						  <b>
                <a href="https://instagram.com/debate.tfss">
              Co-President, Turner Fenton Debate Society
               </a>
               </b>
             <br />
              <i>Sep 2020 - Present</i><br />
							Lead a team of 12 students. Hosted the Spring Debate Conference and speaker events. Outlined lessons for 70+ members.
             <br /><br />

						 <b>
                <a href="https://hackclub.com">
              Co-President, Turner Fenton Hack Club
               </a>
               </b>
             <br />
              <i>Sep 2021 - Present</i><br />
							A coding club built on the foundation of ideation and development through a technical medium.
             <br /><br />

						  <b>
                <a href="https://medium.com/@itsrajanagarwal">
              Writer, Junior Economist
               </a>
               </b>
             <br />
              <i>Nov 2020 - June 2021</i><br />
						Writer for Junior Economist Toronto, occasional writer for the International Publication. Creating digestible content about current economic issues.
             <br /><br />

						 <b>
                <Link to="/">
              Student Researcher, UofT URECS
               </Link>
               </b>
             <br />
              <i>Nov 2020 - Mar 2021</i><br />
						 Investigated the simulation of cancer using COBWEB. Supervised by Dr. Brad Bass, PhD.
             <br /><br />

						 <b>
                <a href="https://turnefentondeca.com">
              Marketing Instructor, Turner Fenton DECA
               </a>
               </b>
             <br />
              <i>Nov 2020 - Mar 2021</i><br />
						 Taught 40+ students in a comprehensive marketing curriculum. Provincial Top 14 Finalist
             <br /><br />
						 </p>
            </Col>

          </Row>
					<Row>
            <Col sm={2.5}></Col> 
            <Col sm={7} className="animate1">
              <h5 className="manifesto linkheader">Ventures</h5>
              <p className="p-manifesto">
               <b>
                <Link to="/ventures">
              Breaking Barriers
               </Link>
               </b>
             <br />
              A novel about hope. 25 Digital Copies were produced - experience taugh me the importance of project planning and creative writing.
             <br /><br />

						 <b>
                <a href="http://run.heyrajan.com/">
              Run For Hope
               </a>
               </b>
             <br />
              As a Canadian, seeing the discoveries of unmarked graves was heartbreaking. On July 12, 160 unmarked graves were discovered. Within the same time period, thousands more were found, symbolizing the treacherous conditions for indigenous families. Deeply affected by the news, I took it upon myself to spend 1 month running 160km and tracking my journey.
             <br /><br />

						 <b>
                <a href="https://instagram.com/imagesforimpact">
              Images For Impact
               </a>
               </b>
             <br />
             My non-profit photography business with 100% of income donated to Chum Christmas Wish. Taught the importance of starting young and managing finances. Featured on CP24, Sponsored by JACO.
             <br /><br />

						 <b>
                <Link to="/ventures">
              Freelancing
               </Link>
               </b>
             <br />
            Freelancer for frontend applications and video editing. 7 Clients and nearly $1000 in profit. Highlighted the importance of having unique skills.
             <br /><br />
						 
						 </p>
            </Col>
            <Col sm={2.5}></Col>
          </Row>  
				
					<Row>
            <Col sm={2.5}></Col>
            <Col sm={7} className="animate1">
              <h5 className="manifesto linkheader">Skills</h5>
              <p className="p-manifesto">
               <b>
                <a href="https://heyrajan.com">
              Technical Skills
               </a>
               </b>
             <br />
              Analytical Research, Public Speaking, Project Management, Web Development, Economic Writing, Team Building, Marketing Consulations, Working Under Pressure, Financial Management<br />
             <br />
						 <b>
                <a href="https://heyrajan.com">
              Soft Skills
               </a>
               </b>
             <br />
             Leadership, Programming, Collaboration,  Time Management, Adabtibility, Problem Solving, Mind-Mapping, Designing, Marketing Communications, Emotional Intelligence, Business Etiquette<br />
             <br />
						 </p>
            </Col>
            <Col sm={2.5}></Col>
          </Row> 
					<Row>
            <Col sm={2.5}></Col>
            <Col sm={7} className="animate1">
              <h5 className="manifesto linkheader">Get In Touch</h5>
              <p className="p-manifesto">
               <b>
                <a href="https://heyrajan.com">
              Availability
               </a>
               </b>
             <br />
              Not Available For Work Until Spring 2022<br />
             <br />
						 <b>
                <a href="https://heyrajan.com">
              Email
               </a>
               </b>
             <br />
              For Professional Inquiries, shoot me an email at rajanagarwal.rsa@gmail.com<br />
             <br />
						 <b>
                <a href="https://spiritofmath.com/">
              Schedule A Call
               </a>
               </b>
             <br />
              Email me or contact me on <a href="http://in.heyrajan.com">Linkedin to schedule a time!</a><br />
             <br /><br /><br />
						 </p>
            </Col>
            <Col sm={2.5}></Col>
          </Row>      
					      </div>
        </Container>
    );
  }
}

export default Work;
