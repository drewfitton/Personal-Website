import React, { useState, useEffect } from 'react';
import headshot from './assets/Headshot.jpg'
import linkedin from './assets/linkedin-1.png';
import insta from './assets/instagram-1.png';
import github from './assets/github-1.png';
import toggleDown from './assets/down-arrow.png';
import toggleRight from './assets/right-arrow.png';
import gatech from './assets/gatech.png';
import manh from './assets/manh.png';
import react from './assets/react.png';
import python from './assets/python-logo.png';
import bio from './assets/bio.png';
import webdev from './assets/webdev.png';


const About = () => {
  const [streakHeight, setStreakHeight] = useState('0%');
  const [isBioOpen, setIsBioOpen] = useState(true);
  const [isIntOpen, setIsIntOpen] = useState(true);
  const [isEduOpen, setIsEduOpen] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(true);
  const [isTechOpen, setIsTechOpen] = useState(true);
  const [isExpOpen, setIsExpOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleBio = () => {
    setIsBioOpen(!isBioOpen);
  };

  const toggleInterests = () => {
    setIsIntOpen(!isIntOpen);
  };

  const toggleEducation = () => {
    setIsEduOpen(!isEduOpen);
  };

  const toggleLanguages = () => {
    setIsLangOpen(!isLangOpen);
  };

  const toggleTech = () => {
    setIsTechOpen(!isTechOpen);
  };

  const toggleExperience = () => {
    setIsExpOpen(!isExpOpen);
  }

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
    <div className='about-div'>
      <div class='about-cover'>
        <div class='about-header'>
          <h1 class="h1-about">ABOUT</h1>
          <h4 class="h3-about">Andrew Fitton</h4>
        </div>
        <img class='headshot' src={headshot} alt="headshot"/>
      </div>
      <div class="bio-area">

        <div class="bio-section">
          <div class={`bio-section-bar ${isBioOpen ? 'open' : 'closed'}`} onClick={toggleBio}>
            <div class="bio-header">
              <h2 class="bio-section-header">BIO</h2>
              <img class='school-logo' src={bio} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isBioOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isBioOpen && (
            <p class="bio-para">I'm from Atlanta, Georgia, and I am passionate about building effective and scalable software that has a positive impact on its users.
            With a wide range of experiences in software engineering, cybersecurity, data engineering, and integration I can fit into any technical environment and adapt to new skills on the fly.<br />
            Personally, I enjoy playing football (soccer), outdoor adventures, and spending time with friends and family.
            </p>
          )} 
        </div>

        <div class="bio-section">
          <div class={`bio-section-bar ${isExpOpen ? 'open' : 'closed'}`} onClick={toggleExperience}>
            <div class="bio-header">
              <h2 class="bio-section-header">EXPERIENCE</h2>
              <img class='school-logo' src={manh} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isExpOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isExpOpen && (
            <div class="list-div">
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>Manhattan Associates</p>
                  <p>Software Implementation Consultant</p>
                </div>
                <p>{isMobile ? 'Present' : 'June 2024 - Present'}</p>
              </div>
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>Nike</p>
                  <p>Software Engineer Intern</p>
                </div>
                <p>{isMobile ? '2023' : 'June 2023 - August 2023'}</p>
              </div>
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>Georgia Tech Research Institute</p>
                  <p>Secure Computing Engineer Co-Op</p>
                </div>
                <p>{isMobile ? '2022' : 'May 2022 - August 2022'}</p>
              </div>
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>Investment Metrics (Confluence)</p>
                  <p>Market Insights Intern</p>
                </div>
                <p>{isMobile ? '2020' : 'June 2020 - August 2020'}</p>
              </div>
            </div>
          )}
        </div>

        <div class="bio-section">
          <div class={`bio-section-bar ${isEduOpen ? 'open' : 'closed'}`} onClick={toggleEducation}>
            <div class="bio-header">
              <h2 class="bio-section-header">EDUCATION</h2>
              <img class='school-logo' src={gatech} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isEduOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isEduOpen && (
            <div class="list-div">
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>MS Computer Science at Georgia Tech</p>
                  <p>Human Computer Interation</p>
                  <p>GPA: 4.0</p>
                </div>
                <p>2025</p>
              </div>
              <div class="split-list">
                <div class='edu-entry'>
                  <p class='degree'>BS Computer Science at Georgia Tech</p>
                  <p>Intelligence and Info Internetworks</p>
                  <p>GPA: 3.75</p>
                </div>
                <p>2020 - 2024</p>
              </div>
            </div>
          )}
        </div>

        <div class="bio-section">
          <div class={`bio-section-bar ${isIntOpen ? 'open' : 'closed'}`} onClick={toggleInterests}>
          <div class="bio-header">
              <h2 class="bio-section-header">INTERESTS</h2>
              <img class='school-logo' src={webdev} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isIntOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isIntOpen && (
            <div class="center-list">
              <ul class="interests-list">
                  <li>Mobile and Web Development</li>
                  <li>Machine Learning and AI</li>
                  <li>Data Visualization</li>
                  <li>Data Engineering</li>
              </ul>
            </div>
          )}
        </div>
        
        <div class="bio-section">
          <div class={`bio-section-bar ${isLangOpen ? 'open' : 'closed'}`} onClick={toggleLanguages}>
            <div class="bio-header">
              <h2 class="bio-section-header">LANGUAGES</h2>
              <img class='school-logo' src={python} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isLangOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isLangOpen && (
            <div class="badge-div">
              <img class="badge" src="https://img.shields.io/badge/-Python-05122A?style=flat&logo=python" alt="Python" />
              <img class="badge" src="https://img.shields.io/badge/-Swift-05122A?style=flat&logo=swift&logoColor=red" alt="Swift" />
              <img class="badge" src="https://img.shields.io/badge/-TypseScript-05122A?style=flat&logo=typescript&logoColor=blue" alt="TypeScript" />
              <img class="badge" src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="JavaScript" />
              <img class="badge" src="https://img.shields.io/badge/-Java-05122A?style=flat&logo=CoffeeScript" alt="Java" />
              <img class="badge" src="https://img.shields.io/badge/-SQL-05122A?style=flat&logo=SQLite" alt="SQL" />
              <img class="badge" src="https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=HTML5" alt="HTML5" />
              <img class="badge" src="https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="CSS3" />
              <img class="badge" src="https://img.shields.io/badge/-C-05122A?style=flat&logo=C&logoColor=1572B6" alt="C" />
              <img class="badge" src="https://img.shields.io/badge/-Go-05122A?style=flat&logo=Go&logoColor=1572B6" alt="Go" />
              <img class="badge" src="https://img.shields.io/badge/-PyTorch-05122A?style=flat&logo=pytorch" alt="PyTorch" />&nbsp;
            </div>
          )}
        </div>
        
        <div class="bio-section">
          <div class={`bio-section-bar ${isTechOpen ? 'open' : 'closed'}`} onClick={toggleTech}>
            <div class="bio-header">
              <h2 class="bio-section-header">TECHNOLOGIES</h2>
              <img class='school-logo' src={react} alt="GATECH"/>
            </div>
            <img className="bio-section-toggle" src={isTechOpen ? toggleDown : toggleRight} alt="toggle"/>
          </div>
          {isTechOpen && (
            <div class="badge-div">
              <img class="badge" src="https://img.shields.io/badge/-React.js-05122A?style=flat&logo=react" alt="React.js" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Next.js-05122A?style=flat&logo=nextdotjs&logoColor=FEFEFE" alt="Next.js" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Express.js-05122A?style=flat&logo=express&logoColor=white" alt="Express.js" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js" alt="Node.js" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap&logoColor=563D7C" alt="Bootstrap" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Webpack-05122A?style=flat&logo=webpack" alt="Webpack" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Firebase-05122A?style=flat&logo=firebase" alt="Firebase" />&nbsp;
              <img class="badge" src="https://img.shields.io/badge/-Jupyter-05122A?style=flat&logo=Jupyter" alt="Jupyter" /> 
              <img class="badge" src="https://img.shields.io/badge/-Databricks-05122A?style=flat&logo=databricks" alt="Databricks" />
              <img class="badge" src="https://img.shields.io/badge/-OpenAI-05122A?style=flat&logo=OpenAI" alt="OpenAI" />
              <img class="badge" src="https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=PostgreSQL" alt="PostgreSQL" />
              <img class="badge" src="https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=MongoDB" alt="MongoDB" />
              <img class="badge" src="https://img.shields.io/badge/-MySQL-05122A?style=flat&logo=MySQL" alt="MySQL" />
              <img class="badge" src="https://img.shields.io/badge/-AWS-05122A?style=flat&logo=amazonwebservices" alt="AWS" />
              <img class="badge" src="https://img.shields.io/badge/-Azure-05122A?style=flat&logo=Azure-DevOps" alt="Azure" />
              <img class="badge" src="https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker" alt="Docker" />
              <img class="badge" src="https://img.shields.io/badge/-GNU%20Bash-05122A?style=flat&logo=GNU-Bash" alt="GNU Bash" />
              <img class="badge" src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git" alt="Git" />
              <img class="badge" src="https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown" alt="Markdown" />
              <img class="badge" src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" alt="GitHub" />
              <img class="badge" src="https://img.shields.io/badge/-Atlassian%20Suite-05122A?style=flat&logo=atlassian&logoColor=blue" alt="Atlassian Suite" />
              <img class="badge" src="https://img.shields.io/badge/-Figma-05122A?style=flat&logo=figma" alt="Figma" />
              <img class="badge" src="https://img.shields.io/badge/-ApacheAirflow-05122A?style=flat&logo=apacheairflow" alt="Apache Airflow" />
              <img class="badge" src="https://img.shields.io/badge/-Windows-05122A?style=flat&logo=Windows" alt="Windows" />
              <img class="badge" src="https://img.shields.io/badge/-macOS-05122A?style=flat&logo=macOS" alt="macOS" />
              <img class="badge" src="https://img.shields.io/badge/-Linux-05122A?style=flat&logo=Linux" alt="Linux" />
              <img class="badge" src="https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC" alt="Visual Studio Code" />
            </div>
          )}
        </div>
      </div>
    </div>

    <div className='connect-cover'></div>
      <div className="connect">
        <a className="social-logo" href="https://www.linkedin.com/in/andrewfitton/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" /> 
        </a>
        <a className="social-logo" href="https://github.com/drewfitton" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="LinkedIn" /> 
        </a>
        <a className="social-logo" href="https://www.instagram.com/drew_fitton/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" /> 
        </a>
      </div>
    </div>
  );
};

export default About;
