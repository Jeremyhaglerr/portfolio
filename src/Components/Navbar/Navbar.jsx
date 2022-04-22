import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
        <nav>
          <ul className="sidenav">
            <li><a href="#header"><span>Home</span></a></li>
            <li><a href="#top-projects"><span>Projects</span></a></li>
            <li><a href="#about"><span>About</span></a></li>
            <li><a href="#contact"><span>Contact</span></a></li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar