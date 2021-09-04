import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Signup from "./Components/Signup/signup";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import ShowBoard from "./Components/ShowBoard/showBoard";
import Notes from "./Components/Notes/notes";
import InviteCoworker from "./Components/InviteCoworker/inviteCoworker";
import Calendar from "./Components/Calendar/calendar";
import Email from "./Components/Email/email";
import Chat from "./Components/Chat/chat";
import NavBar from "./Components/NavBar/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [userBoards, setUsersBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [boardUsers, setBoardUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentInfo = window.localStorage.getItem("saved-info");
    const savedInfo = JSON.parse(currentInfo);
    if (savedInfo !== null) {
      setCurrentBoard(savedInfo.board);
      setCurrentUser(savedInfo.user);
      setLoading(false);
    } else if (savedInfo === null) {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (currentBoard.length !== 0) {
      getCurrentUserRole();
    }
    let user = currentUser;
    let board = currentBoard;
    const valuesToSave = { user, board };
    window.localStorage.setItem("saved-info", JSON.stringify(valuesToSave));
    if (currentUser.length !== 0) {
      getUsers();
      getUsersBoards();
    }
  }, [currentUser, currentBoard]);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const getUsers = async () => {
    await axios.get("http://localhost:27029/api/User").then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  };

  const getUsersBoards = async () => {
    let userId = currentUser.userId;
    await axios
      .get(`http://localhost:27029/api/Board/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          setUsersBoards(res.data);
        }
      });
  };

  const createCurrentUser = (user) => {
    setCurrentUser(user);
  };

  const getCurrentBoard = async (boardId) => {
    await axios
      .get(`http://localhost:27029/api/Board/CurrentBoard/${boardId}`)
      .then((res) => {
        if (res.status === 200) {
          setCurrentBoard(res.data[0]);
        }
      });
  };

  const getCurrentUserRole = async () => {
    const userId = currentUser.userId;
    const boardId = currentBoard.boardId;
    await axios
      .get(
        `http://localhost:27029/api/User/GetUserRole/Board/${boardId}/User/${userId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setUserRole(res.data[0].roles.roleName);
        }
      });
  };

  const displayBoardUsers = async (boardId) => {
    await axios
      .get(`http://localhost:27029/api/User/${boardId}`)
      .then((res) => {
        if (res.status === 200) {
          setBoardUsers(res.data);
        }
      });
  };
  let location = useLocation();
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} />
        {!loading && (
          <div>
            <NavBar
              currentUser={currentUser}
              currentBoard={currentBoard}
              userRole={userRole}
              logout={logout}
            />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  path="/"
                  exact
                  render={(props) => {
                    if (currentUser.length === 0) {
                      return <Redirect to="/Login" />;
                    } else {
                      return (
                        <Home
                          {...props}
                          currentUser={currentUser}
                          userBoards={userBoards}
                          getUsersBoards={getUsersBoards}
                          getCurrentBoard={getCurrentBoard}
                          currentBoard={currentBoard}
                          setCurrentBoard={setCurrentBoard}
                        />
                      );
                    }
                  }}
                />
                <Route
                  path="/Login"
                  render={(props) => (
                    <Login {...props} createCurrentUser={createCurrentUser} />
                  )}
                />
                <Route
                  path="/Signup"
                  render={(props) => <Signup {...props} />}
                />
                <Route
                  path="/Notes"
                  render={(props) => (
                    <Notes
                      {...props}
                      currentUser={currentUser}
                      currentBoard={currentBoard}
                    />
                  )}
                />
                <Route
                  exact
                  path="/ShowBoard/:id"
                  render={(props) => {
                    if (currentUser.length === 0) {
                      return <Redirect to="/Login" />;
                    } else {
                      return (
                        <ShowBoard
                          {...props}
                          currentBoard={currentBoard}
                          currentUser={currentUser}
                          userRole={userRole}
                          displayBoardUsers={displayBoardUsers}
                        />
                      );
                    }
                  }}
                />
                <Route
                  path="/Chat"
                  render={(props) => (
                    <Chat {...props} currentUser={currentUser} />
                  )}
                ></Route>
                <Route
                  path="/Invite"
                  render={(props) => {
                    if (currentUser.length === 0) {
                      return <Redirect to="/Login" />;
                    } else if (currentBoard.length === 0) {
                      return <Redirect to="/" />;
                    
                    } else if((userRole === "Admin" || userRole === "Board Owner")) {
                      return (
                        <InviteCoworker
                          {...props}
                          users={users}
                          currentBoard={currentBoard}
                          currentUser={currentUser}
                          displayBoardUsers={displayBoardUsers}
                          boardUsers={boardUsers}
                          userRole={userRole}
                        />
                      );
                    } else if (userRole !== "Admin" || userRole !== "Board Owner") {
                      const boardId = currentBoard.boardId;
                      return <Redirect to={`/ShowBoard/${boardId}`} />;
                    }
                  }}
                />
                <Route
                  path="/ViewCalendar"
                  render={(props) => {
                    if (currentUser.length === 0) {
                      return <Redirect to="/Login" />;
                    } else if (currentBoard.length === 0) {
                      return <Redirect to="/" />;
                    } else {
                      return (
                        <Calendar
                          {...props}
                          currentBoard={currentBoard}
                          userRole={userRole}
                          boardUsers={boardUsers}
                          displayBoardUsers={displayBoardUsers}
                        />
                      );
                    }
                  }}
                />
                <Route
                  path="/Email"
                  render={(props) => {
                    if (currentUser.length === 0) {
                      return <Redirect to="/Login" />;
                    } else if (currentBoard.length === 0) {
                      return <Redirect to="/" />;
                    } else {
                      return (
                        <Email
                          {...props}
                          currentBoard={currentBoard}
                          currentUser={currentUser}
                          boardUsers={boardUsers}
                          displayBoardUsers={displayBoardUsers}
                        />
                      );
                    }
                  }}
                />
              </Switch>
            </AnimatePresence>
          </div>
        )}
    </React.Fragment>
  );
};

export default App;
