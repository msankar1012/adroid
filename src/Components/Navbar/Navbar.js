// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <nav>
          <ul>
              {/* <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/our-process'}>Our Process</NavLink></li> */}

              <li><a href="/">Home</a></li>
              <li><a href="/">Our Process</a></li>
              <li><a href="/">About Us</a></li>
          </ul>
      </nav>
  )
}

export default Navbar;