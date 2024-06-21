import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/gym.jpeg";
import gender from "../../Assets/Projects/gender.jpg";
import face from "../../Assets/Projects/download.jpeg";
import spectre from "../../Assets/Projects/Spectre.png";
import Jewel from "../../Assets/Projects/jewel.png";
import covid from "../../Assets/Projects/covid.jpeg";
import scrumble from "../../Assets/Projects/scrumble.jpg";
import rice from "../../Assets/Projects/ricesam2.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spectre}
              isBlog={false}
              title="Spectre-FYP"
              description="SPECTRE is basically to upgrade the security system by making them intelligent using computer vision. It would be capable of identifying these suspicious activities using different deep learning algorithms and recognizing the face using an attached database."
              demoLink="https://sites.google.com/view/mpvir/video-analytics/spectre"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Integrated Face Recognition and sentiment analysis in React"
              description="Implemented code in python of FAST API
              For sentiment Analysis:
              o It takes an array of comments of user and used pretrained model and library to get three classes
              of comment i.e., positive, negative, and neutral.
              For Face Recognition:
              o It takes an image of user and take images of currently logged in user image from mongo DB and
              compare the extracted features."
              demoLink="https://drive.google.com/file/d/1N5A5K7gqb1eYIDKggz-JvdGynLCUxHFn/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrumble}
              isBlog={false}
              title="Scramble Puzzle Solver"
              description="Scrambled Word Puzzle Solver using image processing techniques and ML models.
              Image processing and segmentation using OpenCV and Python
              Used three Different features extractors ORB, SIFT, HOG
              Trained EMNIST Characters Dataset on SVM, KNN, Naive Bayes classifiers
              Generated accuracy plots and achieved 95% accuracy"
              ghLink="https://github.com/chaudhary121/Scrumble_puzzle_solver_using_ML_and_DIP"
              demoLink="https://drive.google.com/drive/folders/1hb1MQnNt7zsA1AQEwB7HSFfP5vVllu8i?usp=drive_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid image Classification using DecisionTree with- PYQT5 UI"
              description="
              Developed small desktop Application in pyQt5.Allows user to add image.
              Shows result against image using trained model."
              ghLink="https://github.com/aliahmadarshad2/Covid_image_Classification-using-DecisionTree-with-PYQT5UI-Complete-Machinelearning-Project"
              demoLink="https://drive.google.com/file/d/14AAAx3acldGbAyfHkikstJ4e3LtpEykL/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM System web Application"
              description="Developed Application that allows user to authorize and authenticate.
              Performed complete CRUD
              Learned React.js and REST API , Mongo CRUD, HTML CS"
              ghLink="https://github.com/aliahmadarshad2/GymSystem-react-app"
              demoLink="https://drive.google.com/file/d/1RdCK-oBoq-uRfMCVlMoBgtiWWTgg8N-v/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrumble}
              isBlog={false}
              title="Maze-Game-and-Puzzle-using-Astar-algorithm"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/aliahmadarshad2/Maze-Game-and-Puzzle-using-Astar-algorithm"
              demoLink="https://drive.google.com/file/d/1hNn9r01KSl6C2ecYLVrz59dHhqirXchv/view?usp=drive_link"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jewel}
              isBlog={false}
              title="Jewelry selling Android APP in React Native"
              description="Developed Application that allows user to authorize and authenticate using Firebase.
              Allows users to add post for selling.
              Allows users to buy any product.
              Performed complete CRUD
              Learned about Firebase"
              ghLink="https://github.com/aliahmadarshad2/Jewelery_Selling_Application_in_React-Native"
              demoLink="https://drive.google.com/file/d/1xnVBJ__stiStQvZeXoW_BJfS9-pYGUPq/view?usp=drive_link"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gender}
              isBlog={false}
              title="Gender Classification using KNN and Perceptron with- Tkinter UI"
              description="Developed small desktop Application in Tkinter.
              Allows user to add all the entries in fields.
              Shows result against entries using trained models."
              demoLink="https://drive.google.com/drive/folders/1s2EBYqTosRq6sUGdxuuPQgE8XGfjhtFj"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rice}
              isBlog={false}
              title="Calculating no.of largest length smallest length and total number of rice in python using DIP concepts"
              description="Applying thresholding, Finding contours
              Based on contours, smallest values and largest values determined smallest and largest length of gain and
              total no of grains."
              ghLink="https://github.com/aliahmadarshad2/Rice-Grains-count-using-DIP"
              demoLink="https://drive.google.com/drive/folders/1LFrTAaEUhABlTad1DkDNgLr8s4hULXdy"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
