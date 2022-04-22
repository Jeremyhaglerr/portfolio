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
          <div className="frontend">
            <h2 id="frontend-skills">Frontend</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="backend">
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
          <div className="server">
            <h2 id="server-skills">Server</h2>
            <ul>
              <li>MongoDB Atlas</li>
              <li>Mongoose ODM</li>
              <li>PostreSQL</li>
            </ul>
          </div>
          <div className="other">
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
          <img src="u4 ss.jpg" alt="" />
        </div>
        <div className="project">

        </div>
        <div className="project">

        </div>
        <div className="project">

        </div>
      </section>
    </div>
  );
}

export default Landing;