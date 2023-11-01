
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import fyp from "../../Assets/fyp.jpeg";
import fyp1 from "../../Assets/fyp1.jpg";
import fyp2 from "../../Assets/fyp2.jpg";
import ehsas from "../../Assets/ehsas.png";
import cert from "../../Assets/cert.jpg";
import seed from "../../Assets/seed.png";
function achievement() {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={3}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Humbled to have secured the <span className="purple"> FIRST POSITION</span> among 130+ Final Year Projects presented in
                FYP Competition Exibition of <span className="purple">COMSAT UNIVERSITY LAHORE. </span>

              </p>

            </blockquote>
            <img
              src={cert}
              alt="home pic"
              className="img-fluid"
              style={{ height: "160px" }}
            />


          </Col>

          <Col md={3} style={{ paddingBottom: 20 }}>
            <img
              src={fyp}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
          <Col md={3}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Similarly secured the <span className="purple"> SECURED POSITION</span> among 130+ Final Year Projects presented in
                FYP  Poster Competition Exibition of <span className="purple">COMSAT UNIVERSITY LAHORE. </span>

                <br />
              </p>
              <img
                src={fyp1}
                alt="home pic"
                className="img-fluid"
                style={{ height: "150px" }}
              />

            </blockquote>

          </Col>
          <Col md={3} style={{ paddingBottom: 20 }}>

            <img
              src={fyp2}
              alt="home pic"
              className="img-fluid"
              style={{ height: "300px" }}
            />
          </Col>
        </Row>

        <a href="https://lahore.comsats.edu.pk/cs/fyp/position.aspx" target="_blank">
          <Button className="fork-btn-inner">Find me on the official website</Button>
        </a>


        <br /><br />
        <Row>
          <Col md={3}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Awarded<span className="purple"> Full Ehsas Merit Base Scholarship</span> that contained
                <br />
                <ImPointRight /> Full Tuition Fee
                <br />
                <ImPointRight /> Rs.40,000 living allowance per annum
                <br />
                <ImPointRight /> Mandatory Academic Charges per semester/annum

                <br />
                Throughout 4 years of graduation <span className="purple">(08/2019 - 07/2023)</span>
                <br />
              </p>

            </blockquote>

          </Col>

          <Col md={3} style={{ paddingBottom: 20 }}>
            <img
              src={ehsas}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
          <Col md={3} style={{ paddingBottom: 20 }}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Nomited for <span className="purple"> Training program offered by Huawaei Technologies for students</span>
                among all the high achiever from Lahore Campus. It is fully funded program that covers air tickets and food.
                This program is planned to be held at <span className="purple"> muscat,Oman.</span>

              </p>


            </blockquote>
          </Col>
          <Col md={3} style={{ paddingBottom: 20 }}>
            <img
              src={seed}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                <strong> Other<span className="purple"> Achievements</span> are</strong>
                <br />
                <ImPointRight /> Awarded Merit Based Scholarship in PGC (06/2017 - 05/2019)



                <br />
                <ImPointRight /> Awarded Dr Nisar Ahmad khan scholarship based on first year marks in second year of intermediate.
                <br />
                <ImPointRight /> Awarded a Certificate of Appreciation in “My Bright smile” Drawing Competition (06/2013)

                <br />
                <ImPointRight />Awarded a Certificate of Appreciation in speech competition held at child complex Lahore contest
                (09/2012)

                <br />
                <ImPointRight />
                Member of <button>MPVIR </button>group
                <br />
              </p>

            </blockquote>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default achievement;
