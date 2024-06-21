import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Ahmad </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am currently employed as a software developer at
            MSLM on Business Cloud specifically Billing. I joined mslm from 21 August 2023 as a intern which led to my first job after my Graduation in July 2023.
            <br />
            Originating from a small village, the journey to my current position as a <span className="purple">software engineer 💻</span> 
            was riddled with challenges.Throughout my academic journey, I consistently excelled,<span className="purple"> securing A+ grades
             in both matriculation and FSC(Pre-Engineering).</span>Thirst of knowledge made me to 
             choose <span className="purple">COMSAT UNIVERSITY LAHORE for my Bachelor’s degree in Computer Science.</span> 
             I worked hard to prove my abilities, and I was successful and got my degree with 
             <span className="purple"> distinction of Gold Medalist 🥇</span> . I led a team that built an AI-based surveillance 
             system as a FYP and become <span className="purple">First Prize Holder among 150+ projects represented in 
             Comsats FYP Competition(Alhumdulillah being humbled).</span>My aspirations extend beyond personal
              accomplishments; they are rooted in the dreams of my beloved parents, particularly my mother,
               who serves as a constant source of inspiration.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            جہاں قطرے کو ترسایا گیا ہوں
            <br/>
وہیں ڈوبا ہوا پایا گیا ہوں
<br/>
مجھے تو اس خبر نے کھو دیا ہے
<br/>
سنا ہے میں کہیں پایا گیا ہوں
<br/>
حفیظ! اہلِ زبان کب مانتے تھے
<br/>
بڑے زوروں سے منوایا گیا ہوں{" "}
          </p>
          <footer className="blockquote-footer">Hafeez jalandhari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
