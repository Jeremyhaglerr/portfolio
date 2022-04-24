const Skills = (props) => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-options" >
        <div className="skill-section">
          <h2 id="frontend-skills">Frontend</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>EJS</li>
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
            <li>Surge.sh</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;