import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import "./navbar.css";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'
const NavBar = ({currentUser, currentBoard}) => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <React.Fragment>
            <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {currentUser.length !== 0 &&
                <li style={{color: "white"}} className="fs-5 nav-text"> Welcome Back {currentUser.firstName}</li>
                }
                {currentUser.length !== 0 &&
                <li className="nav-text">
                    <Link to="/"><AiIcons.AiFillHome />
                        <span>Home</span>
                    </Link>
                </li>
                }   
                {currentBoard.length !== 0 &&
                <React.Fragment>
                <li className="nav-text">
                    <Link to="/Invite"><IoIcons.IoMdPeople />
                        <span>Invite Coworkers</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="/ViewCalendar"><AiIcons.AiOutlineCalendar />
                        <span>View Calendar</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="/Chat"><AiIcons.AiOutlineMessage />
                        <span>Chat</span>
                    </Link>
                </li>
                </React.Fragment>
                    }
                    {currentUser.length === 0 &&
                    <React.Fragment>
                <li className="nav-text">
                    <Link to="/Login"><AiIcons.AiOutlineLogin/>
                        <span>Login</span>
                    </Link>
                </li>
                
                <li className="nav-text">
                    <Link to="/Signup"><BsIcons.BsPencilSquare/>
                        <span>Signup</span>
                    </Link>
                </li>
                </React.Fragment>
                }
            </ul>
            </nav>
            </IconContext.Provider>
        </React.Fragment>
    )
}

export default NavBar