const Projects = (props) => {
  return (
    <section id="top-projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="u4-ss.jpg" alt="workflow screenshot" />
        <h3>Workflow</h3>
        <p>Workflow is a project management React app with a Flask API backend utilizing a PostgreSQL database</p>
        <p> <strong>Technologies used:</strong> JavaScript, React, CSS3, HTML5, Python, Anaconda, Flask, PostgreSQL, Netlify, Heroku </p>
        <a href="https://workflow-react-jh.netlify.app/" rel="noreferrer" target="_blank" >Deployed App</a>
        <a href="https://github.com/Jeremyhaglerr/Workflow-react" rel="noreferrer" target="_blank">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="u2-ss.jpg" alt="Mise en Place Screenshot" />
        <h3>Mise en Place Recipe Tracking</h3>
        <p>Mise en Place is a decoupled MERN stack app allowing users to track recipes and share them with others</p>
        <p> <strong>Technologies used:</strong> JavaScript, Node.JS, CSS3, HTML5, Express, Mongoose, MongoDB Atlas, Bootstrap, Heroku </p>
        <a href="https://mise-en-place-jh.herokuapp.com/" rel="noreferrer" target="_blank">Deployed App</a>
        <a href="https://github.com/Jeremyhaglerr/mise-en-place" rel="noreferrer" target="_blank">Github Repo</a>
      </div>
      <div className="project">
        <img src="u1-ss.jpg" alt="Giant King's Catacombs Screenshot" />
        <h3>Giant King's Catacombs</h3>
        <p>Giant King's Catacombs is a browser based game utilizing HTML5 and JavaScript to create branching stories and interactions</p>
        <p> <strong>Technologies used:</strong> JavaScript, CSS3, HTML5, Bootstrap, Surge.sh </p>
        <a href="https://giant-kings-catacombs.surge.sh/" rel="noreferrer" target="_blank">Deployed App</a>
        <a href="https://github.com/Jeremyhaglerr/adventure-game" rel="noreferrer" target="_blank">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="u3-ss.jpg" alt="GoLocal Screenshot" />
        <h3>GoLocal</h3>
        <p>GoLocal is a decoupled MERN stack app that was co-developed by myself, Eitan Corenblum, and Lucas Dean. This app was built to promote small businesses around the globe submitted by users</p>
        <p> <strong>Technologies used:</strong> JavaScript, React, CSS3, HTML5, Express, Mongoose, MongoDB Atlas, Bootstrap, Heroku </p>
        <a href="https://golocal-jle.herokuapp.com/" rel="noreferrer" target="_blank">Deployed App</a>
        <a href="https://github.com/Jeremyhaglerr/GoLocal-React-FrontEnd" rel="noreferrer" target="_blank">GitHub Repo</a>
      </div>
    </section>
  );
}

export default Projects;