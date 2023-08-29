import { NavLink } from 'react-router-dom';
import mainIcon from './images/planet.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'myProfile', text: 'My Profile' },
];

const Navbar = () => (
  <header>
    <nav>
      <img src={mainIcon} alt="user icon" />
      <h1>Space Travelers&apos; Hub</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
