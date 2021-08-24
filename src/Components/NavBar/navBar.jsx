import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
const NavBar = ({ currentUser, currentBoard, logout, userRole }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
        <Nav.Link as={Link} to="/"> <AiIcons.AiFillHome /><span style={{color: "#fff"}}>Home</span></Nav.Link>
        }
      {currentBoard.length !== 0 && 
      <React.Fragment>
        {userRole === "Admin" &&
        <Nav.Link  as={Link} to="/Invite"><IoIcons.IoMdPeople /><span style={{color: "#fff"}}>Invite Coworkers</span></Nav.Link>
        }
        <Nav.Link  as={Link} to="/Notes"><BsIcons.BsPencilSquare /><span style={{color: "#fff"}}>Notes</span></Nav.Link>
        <Nav.Link as={Link} to="/ViewCalendar"><AiIcons.AiOutlineCalendar /><span style={{color: "#fff"}}>View Calendar</span></Nav.Link>
        <Nav.Link as={Link} to="/Chat"><AiIcons.AiOutlineMessage /><span style={{color: "#fff"}}>Chat</span></Nav.Link>
        </React.Fragment>
      }
      {currentUser.length === 0 && 
      <React.Fragment>
        <Nav.Link as={Link} to="/Login"><AiIcons.AiOutlineLogin /><span style={{color: "#fff"}}>Login</span></Nav.Link>
      <Nav.Link as={Link} to="/Signup"><BsIcons.BsPencilSquare /><span style={{color: "#fff"}}>Signup</span></Nav.Link>
      </React.Fragment>
      } 
      {currentUser.length !== 0 &&
      <Nav.Link as={Link} onClick={logout}><FiIcons.FiLogOut /><span style={{color: "#fff"}}>Logout</span></Nav.Link>
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
