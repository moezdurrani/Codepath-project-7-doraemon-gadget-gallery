import peeking from "./../assets/peeking.7c0ab599.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="m-auto">
        <nav>
          <ul className="flex space-x-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create a Crewmate!</Link></li>
            <li><Link to="/gallery">Crew Gallery</Link></li>
          </ul>
        </nav>
      </div>
      <img src={peeking} alt="Peeking" width="80" height="80" />
    </div>
  );
};

export default NavBar;
