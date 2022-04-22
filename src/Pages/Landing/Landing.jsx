const Landing = (props) => {
  return (
    <div className="landing">
      <section className="header">
        <h1>Hello, I am <span> Jeremy Hagler </span>, a <span>Full Stack Software Engineer</span> currently based out of Kansas City, Missouri!  </h1>
        <div className="links" >
          <a href="https://www.linkedin.com/in/jeremy-hagler/"><img src="https://cdn-icons-png.flaticon.com/512/408/408805.png" alt="linkedin" /></a>
          <a href="https://github.com/Jeremyhaglerr"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" /></a>
          <a href="mailto:jeremyhaglerr@gmail.com"><img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" /></a>
          <a href="resume.pdf"><img src="https://cdn-icons-png.flaticon.com/512/7215/7215644.png" alt="resume" /></a>
        </div>
      </section>
      <section className="skills">
        <h1>Skills</h1>
        <div className="skill-options" >
          <div className="skill-section">
            <h2 id="frontend-skills">Frontend</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill-section">
            <h2 id="backend-skills">Backend</h2>
            <ul>
              <li>Python</li>
              <li>Anaconda</li>
              <li>Flask</li>
              <li>Django</li>
              <li>Node.JS</li>
              <li>Express</li>
              <li>CORS</li>
              <li>RESTful Routing</li>
            </ul>
          </div>
          <div className="skill-section">
            <h2 id="server-skills">Server</h2>
            <ul>
              <li>MongoDB Atlas</li>
              <li>Mongoose ODM</li>
              <li>PostreSQL</li>
            </ul>
          </div>
          <div className="skill-section">
            <h2 id="other-skills">Other</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>zsh</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="top-projects">
        <h2>Projects</h2>
        <div className="project">
          <img src="u4-ss.jpg" alt="workflow screenshot" />
          <h3>Workflow</h3>
          <p>Workflow is a project management React app with a Flask API backend utilizing a PostgreSQL database</p>
          <a href="https://workflow-react-jh.netlify.app/" rel="noreferrer" target="_blank" >Deployed App</a>
          <a href="https://github.com/Jeremyhaglerr/Workflow-react" rel="noreferrer" target="_blank">GitHub Repo</a>
        </div>
        <div className="project">
          <img src="u2-ss.jpg" alt="Mise en Place Screenshot"/>
          <h3>Mise en Place Recipe Tracking</h3>
          <p>Mise en Place is a decoupled MERN stack app allowing users to track recipes and share them with others</p>
          <a href="https://mise-en-place-jh.herokuapp.com/" rel="noreferrer" target="_blank">Deployed App</a>
          <a href="https://github.com/Jeremyhaglerr/mise-en-place" rel="noreferrer" target="_blank">Github Repo</a>
        </div>
        <div className="project">
          <img src="u1-ss.jpg" alt="Giant King's Catacombs Screenshot"/>
          <h3>Giant King's Catacombs</h3>
          <p>Giant King's Catacombs is a browser based game utilizing HTML5 and JavaScript to create branching stories and interactions</p>
          <a href="https://giant-kings-catacombs.surge.sh/" rel="noreferrer" target="_blank">Deployed App</a>
          <a href="https://github.com/Jeremyhaglerr/adventure-game" rel="noreferrer" target="_blank">GitHub Repo</a>
        </div>
        <div className="project">
          <img src="u3-ss.jpg" alt="GoLocal Screenshot"/>
          <h3>GoLocal</h3>
          <p>GoLocal is a decoupled MERN stack app that was co-developed by myself, Eitan Corenblum, and Lucas Dean. This app was built to promote small businesses around the globe submitted by users</p>
          <a href="https://golocal-jle.herokuapp.com/" rel="noreferrer" target="_blank">Deployed App</a>
          <a href="https://github.com/Jeremyhaglerr/GoLocal-React-FrontEnd" rel="noreferrer" target="_blank">GitHub Repo</a>
        </div>
      </section>
    </div>
  );
}

export default Landing;