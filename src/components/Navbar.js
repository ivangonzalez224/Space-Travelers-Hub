import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import mainIcon from './images/planet.png';
import '../assets/styles/Navbar.css';

const NavBar = () => (
  <>
    <Navbar bg="white" expand="lg" className="mt-4">
      <Container>
        <div className="d-flex gap-3">
          <Image
            src={mainIcon}
            alt="user icon"
            style={{ width: '75px', height: '75px' }}
          />
          <Navbar.Brand style={{ fontSize: '38px' }}>Space Travelers&apos; Hub</Navbar.Brand>
        </div>
        <Nav
          className="justify-content-end align-items-center gap-3"
          style={{ fontSize: '22px' }}
        >
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/"
              activeClassName="active-link "
            >
              Rockets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/missions"
              activeClassName="active-link"
            >
              Missions
            </Nav.Link>
          </Nav.Item>
          <div className="nav-separator">|</div>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/myProfile"
              activeClassName="active-link"
            >
              My Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    <hr className="my-4 mx-5" />
  </>
);

export default NavBar;
