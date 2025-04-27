import React, { useState, useEffect } from 'react';
import bobbydodd from './assets/bobbydodd.gif';
import p4m from './assets/peace4moms.png';
import './projects.css';
import premPredictor from './assets/premier_predictor.png';
import messi from './assets/messi-project.png';
import worldie from './assets/worldie-soccer.gif';
import linkedin from './assets/linkedin-1.png';
import insta from './assets/instagram-1.png';
import github from './assets/github-1.png';

const projects = [
  { id: 1, title: 'Premier League Match Predictor', techstack: 'Python | Javascript | scikit-learn | React | PostgreSQL | Flask', projectLink: "", github_link: "https://github.com/drewfitton/Premier-League-Predictor-Model", description: "The Premier League Predictor is a React app that leverages Linear Regression and a Random Forest Classifier to predict future Premier League matches based on team form and performances over time. The ML model is connected to a React application through Flask and outputs predictions and odds for user-inputted games.", image: premPredictor},
  { id: 3, title: 'Peace for Moms Mobile App', techstack: 'React | JavaScript | HTML | CSS | Firebase | Figma', projectLink: "https://www.peace4momsga.org/", github_link: "https://github.com/drewfitton/PeaceForMoms", description: "The Peace for Moms Mobile App is a mobile application for iOS and Android devices to assist front-line doctors in diagnosing and treating mothers facing postpartum depression. Our 5 person development team connected Google Firebase to a React Native UI to support login and profile functionality for thousands of users. We algorithmically designed 6 screening tools that doctors can fill out using their patient's symptoms, and then provide the doctors with potential diagnoses and treatments for their patient.", image: p4m},
  { id: 2, title: 'Messi Anything Image Generation', techstack: 'Python | PyTorch | Tensorflow | OpenAI | OpenCV', projectLink: "https://drewfitton.github.io/project-website/", github_link: "https://github.com/tpeat/segment-and-replace", description: "An image segmentation and generation project in which our team of 5 developers built an ML pipeline using PyTorch and TensorFlow. The pipeline uses Supervised learning through a CNN and FPN to segment humans out of images in an MSCoCo dataset, then generates images of Messi through an Unsupervised model based on the OpenAI consistency model. Our segmentation model achieved a 0.75 IoU score against ground truth image masks after training on 3,000+ images.", image: messi},
  { id: 4, title: 'Worldie Soccer Stats iOS App', techstack: 'Swift | SwiftUI | REST API', projectLink: "", github_link: "https://github.com/drewfitton/worldie-soccer-stats", description: "Worldie Soccer Stats is an iOS app I developed in Swift for viewing European soccer matches, standings, and top scorers. I utilized calls to the fooball-data API to gather statistics from past and future matches, and SwiftUI to develop the responsive UI.", image: worldie},
  { id: 5, title: 'Bobby Dodd Defense Web Game', techstack: 'Java | JavaFX | OOP', projectLink: "https://www.youtube.com/watch?v=PszkbBBEKng", github_link: "https://github.com/drewfitton/Bobby-Dodd-Tower-Defense-Game", description: "Bobby Dodd Defense is an online game developed using object-oriented programming techniques in Java and JFX. It was developed in a 3 man development team over 3 months in 2-week long sprints. Our team placed 6th out of 120 teams in a competition graded based on UI experience and code robustness. Our team used Git and Tallo to maintain our codebase and tested all functionality using JUnits throughout development.", image: bobbydodd},
  // { id: 6, title: 'Calculator iOS App', techstack: 'Swift | SwiftUI', projectLink: "google.com", github_link: "", description: "The Peace for Moms Mobile App is a mobile application for iOS and Android devices to assist front-line doctors in diagnosing and treating mothers facing postpartum depression. Our 5 person development team connected a Google Firebase backend to a React Native frontend UI to support login and profile functionality for thousands of users. We algorithmically designed 6 screening tools that doctors can fill out using their patient's symptoms, and then provide the doctors with potential diagnoses and treatments for their patient.", image: calculator}
];

const ProjectsCopy = () => {
  const [streakHeight, setStreakHeight] = useState('0%');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;

    setStreakHeight(`${Math.min(scrollPercentage, 100)}%`); // Cap height at 100%
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="project-page">
      <div className="side-decor"> 
        <div className='arrow'/>
        <div className='line-streak'/>
        <div
          className="gradient-streak"
          style={{ height: streakHeight }}
        ></div>
      </div>
      <div className="projects">
        <div className="project-page-header">
          <h1 className="proj-page-title">PROJECTS</h1>
          <h2 className="proj-page-description">View some of the projects I've built</h2>
        </div>
        {projects.map((project) => (
          <div  className={`project-container ${project.id}`}
            key={project.id}
          >
            <div className="project-info">
              <h2 className="title-text">{project.title}</h2>
              <h4 className="tech-stack">{project.techstack}</h4>
              <p className="proj-description">{project.description}
              </p>
              <div className='project-links'>
                {project.projectLink?.length > 0 && (
                  <a className="site-link" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
                <a className="site-link" href={project.github_link} target="_blank" rel="noopener noreferrer">
                  View Github Repository
                </a>
              </div>
            </div>
            <img src={project.image} alt="Loading..." />
          </div>
        ))}
      </div>
      <div className='connect-cover'></div>
      <div className="connect">
        <a className="social-logo" href="https://www.linkedin.com/in/andrewfitton/" target="_blank" rel="noopener noreferrer">
          <img class='logo' src={linkedin} alt="LinkedIn" /> 
        </a>
        <a className="social-logo" href="https://github.com/drewfitton" target="_blank" rel="noopener noreferrer">
          <img class = 'logo' src={github} alt="LinkedIn" /> 
        </a>
        <a className="social-logo" href="https://www.instagram.com/drew_fitton/" target="_blank" rel="noopener noreferrer">
          <img class='logo' src={insta} alt="Instagram" /> 
        </a>
      </div>
    </div>
  );
};

export default ProjectsCopy;

