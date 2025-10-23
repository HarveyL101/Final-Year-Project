import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav>
     {/** App name and logo */}
     <div className="nav-app_name">
      <h2>KS2 Learning</h2>
     </div>

     {/** Navigation Links */}
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="https://github.com/HarveyL101">Best Account Ever</a></li>
      <li><a href="https://github.com/HarveyL101">Best Account Ever</a></li>
     </ul>
  </nav>
  )
}

export default Navbar;