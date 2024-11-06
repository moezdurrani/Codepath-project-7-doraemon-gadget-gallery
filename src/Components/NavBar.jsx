import cooking from "./../assets/doraemon3.gif";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="m-auto">
        <nav>
          <ul className="flex space-x-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create a Gadget!</Link></li>
            <li><Link to="/gallery">Gadget Gallery</Link></li>
          </ul>
        </nav>
      </div>
      <img src={cooking} alt="Cooking" width="80" height="80" />
    </div>
  );
};

export default NavBar;
