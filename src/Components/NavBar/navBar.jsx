import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import './navbar.css'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
const NavBar = ({ currentUser, currentBoard, logout, userRole }) => {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "white" }}>
      <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand style={{color: "#fff"}} >React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle style={{color: "#fff"}}aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {currentUser.length !== 0 && 
        <Nav.Link className="customNavLink" as={Link} to="/"> <AiIcons.AiFillHome /><span className="ms-2" style={{color: "#fff"}}>Home</span></Nav.Link>
        }
      {currentBoard.length !== 0 && 
      <React.Fragment>
        {userRole === "Admin" &&
        <Nav.Link  className="customNavLink" as={Link} to="/Invite"><IoIcons.IoMdPeople /><span className="ms-2" style={{color: "#fff"}}>Invite Coworkers</span></Nav.Link>
        }
        <Nav.Link className="customNavLink" as={Link} to="/Notes"><BsIcons.BsPencilSquare /><span className="ms-2" style={{color: "#fff"}}>Notes</span></Nav.Link>
        <Nav.Link className="customNavLink" as={Link} to="/ViewCalendar"><AiIcons.AiOutlineCalendar /><span className="ms-2" style={{color: "#fff"}}>View Calendar</span></Nav.Link>
        <Nav.Link className="customNavLink" as={Link} to="/Chat"><AiIcons.AiOutlineMessage /><span className="ms-2" style={{color: "#fff"}}>Chat</span></Nav.Link>
        <Nav.Link className="customNavLink" as={Link} to="/Email"><AiIcons.AiOutlineMail /><span className="ms-2" style={{color: "#fff"}}>Email</span></Nav.Link>
        </React.Fragment>
      }
      {currentUser.length === 0 && 
      <React.Fragment>
        <Nav.Link className="customNavLink" as={Link} to="/Login"><AiIcons.AiOutlineLogin /><span className="ms-2" style={{color: "#fff"}}>Login</span></Nav.Link>
      <Nav.Link className="customNavLink" as={Link} to="/Signup"><BsIcons.BsPencilSquare /><span className="ms-2" style={{color: "#fff"}}>Signup</span></Nav.Link>
      </React.Fragment>
      } 
      {currentUser.length !== 0 &&
      <Nav.Link className="customNavLink" as={Link} onClick={logout}><FiIcons.FiLogOut /><span className="ms-2" style={{color: "#fff"}}>Logout</span></Nav.Link>
      }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default NavBar;
