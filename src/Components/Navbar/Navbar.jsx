import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
        <nav>
          <ul className="sidenav">
            <li><Link to="/"><span>Home</span></Link></li>
            <li><Link to="/Projects"><span>Projects</span></Link></li>
            <li><Link to="/About"><span>About</span></Link></li>
            <li><Link to="/Contact"><span>Contact</span></Link></li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar