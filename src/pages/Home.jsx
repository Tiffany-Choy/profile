import profilePic from "./profile-pic.jpg";
import Job from "../data/work.json";
import "./stylesheets/Home.css";
import Project from "../functions/Project.jsx";
import ProjectData from "../data/project.json"
import Work from "../functions/Work.jsx";

export default function Home() {
  return (
    <>
      <h1>Tiffany Choy</h1>
      <Introduction />
      <FeaturedProjects />
      <FeaturedWork />
      <Skills />
      <Education />
    </>
  );
}
function Introduction() {
  return (
    <>
      <div className="intro">
        <h2 id="sectionHeader">About</h2>
        <div id="intro-content">
          <p id="words">
            I am a passionate software engineer and recent UC Davis graduate
            with a strong foundation in computer science. I am eager to apply my
            coding and problem-solving skills to real-world projects,
            collaborating with talented teams to create innovative solutions.
            Driven by a desire for continuous learning and a commitment to
            making a positive impact, I look forward to contributing to projects
            that shape the future.
          </p>
          <img id="profile" src={profilePic}></img>
        </div>
      </div>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className="skills">
        <h2 id="sectionHeader">Skills</h2>
        <div id="skills-list">
          <div id="systems">
            <h3>Systems</h3>
            <ul>
              <li>Windows</li>
              <li>UNIX</li>
              <li>Linux</li>
              <li>Ubuntu</li>
              <li>Github</li>
              <li>Wix</li>
              <li>Sitefarm</li>
              <li>Microsoft Office</li>
              <li>Zoom</li>
              <li>Slack</li>
              <li>Zoho Suite</li>
            </ul>
          </div>
          <div id="program">
            <h3>Programming</h3>
            <div id="Languages">
              <div id="coding">
                <h4>Languages</h4>
                <ul>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>Javascript</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                  <li>x86</li>
                </ul>
              </div>
              <div id="other">
                <h4>Other</h4>
                <ul>
                  <li>React</li>
                  <li>JSON</li>
                  <li>NodeJS</li>
                  <li>unit test</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="soft">
            <h3>Soft Skills</h3>
            <ul>
              <li>Leader</li>
              <li>Time Management</li>
              <li>Adaptable</li>
              <li>Problem Solver</li>
              <li>Effective communicator</li>
              <li>Task Management</li>
              <li>Collaboration</li>
              <li>Organized</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <div className="education">
        <h2 id="sectionHeader">Education</h2>
        <div class="school">
          <div>
            <h3 id="degree">
              Bachelor of Science in Computer Science and Minor in Technology
              Management
            </h3>
            <p class="location">at University of California, Davis</p>
          </div>
          <p id="time">Graduated in March 2024</p>
        </div>
        <div class="school">
          <div>
            <h3 id="degree">Certificate of Specialization in Project Management</h3>
            <p class="location">at College of San Mateo</p>
          </div>
          <p id="time">Projected Graduation Winter 2025</p>
        </div>
      </div>
    </>
  );
}

function FeaturedProjects() {
  return (
    <>
      <h2 id="sectionHeader">Recent Project</h2>
      <Project
        id={ProjectData[0].id}
        title={ProjectData[0].title}
        languages={ProjectData[0].languages}
        text={ProjectData[0].text}
        github={ProjectData[0].github}
        live={ProjectData[0].live}
        work={ProjectData[0].work}
      />
    </>
  );
}

function FeaturedWork() {
  return (
    <>
      <h2 id="sectionHeader">Recent Work</h2>
      <Work
              id={Job[0].id}
              title={Job[0].title}
              logo={Job[0].logo}
              description={Job[0].description}
              skills={Job[0].skills}
            />
    </>
  );
}
