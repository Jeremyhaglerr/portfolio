const Contact = (props) => {
  return (
    <section id="contact">
      <div className="links" >
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jeremy-hagler/" rel="noreferrer" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/408/408805.png" alt="linkedin" />
              <br />
            </a>
              <p>LinkedIn</p>
          </li>
          <li>
            <a href="https://github.com/Jeremyhaglerr" rel="noreferrer" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
              <br />
            </a>
              <p>GitHub</p>
          </li>
          <li>
            <a href="mailto:jeremyhaglerr@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" />
              <br />
            </a>
              <p>jeremyhaglerr@gmail.com</p>
          </li>
          <li>
            <a href="resume.pdf" rel="noreferrer" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/7215/7215644.png" alt="resume" />
              <br />
            </a>
              <p>Resume</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;