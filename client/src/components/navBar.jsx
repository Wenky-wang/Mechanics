import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( <ul className="nav">
    <li className="nav-item">
      <Link className="nav-link active" to="/">Top Restaurant</Link>
    </li>
  </ul> );
}
 
export default NavBar;