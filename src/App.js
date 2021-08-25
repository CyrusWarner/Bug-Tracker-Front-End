import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import axios from "axios";
import { WindowScrollController } from "@fullcalendar/react";
const App = () => {
  const [users, setUsers] = useState([]);
  const [userBoards, setUsersBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userRole, setUserRole] = useState("")
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
    if(currentBoard.length !== 0){
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
    await axios
      .get("http://localhost:27029/api/User")
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //COME BACK AND ADD TOASTIFY
        }
      });
  };

  const getUsersBoards = async () => {
    let userId = currentUser.userId;
    await axios
      .get(`http://localhost:27029/api/Board/${userId}`)
      .then((res) => {
        if (res.status == 200) {
          setUsersBoards(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
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
        if (res.status == 200) {
          setCurrentBoard(res.data[0]);
        }
      })
      .catch((err) => {
        if (err) {
          //ADD TOASTIFY NOTIFICATION HERE
          console.log(err);
        }
      });
  };

  const getCurrentUserRole = async () => {
    const userId = currentUser.userId;
    const boardId = currentBoard.boardId
    await axios.get(`http://localhost:27029/api/User/GetUserRole/Board/${boardId}/User/${userId}`).then((res) => {
      if(res.status === 200){
        // console.log(res.data)
        setUserRole(res.data[0].roles.roleName)
      }
    })
  }

  const displayBoardUsers = async (boardId) => {
    await axios
      .get(`http://localhost:27029/api/User/${boardId}`)
      .then((res) => {
        if (res.status === 200) {
          setBoardUsers(res.data);
        }
      });
  };
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} />
      <Router>
        {!loading && (
          <div>
            <NavBar
              currentUser={currentUser}
              currentBoard={currentBoard}
              userRole={userRole}
              logout={logout}
            />
            <Switch>
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
              <Route path="/Signup" render={(props) => <Signup {...props} />} />
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
                  if (!currentUser) {
                    return <Redirect to="/Login" />;
                  } else {
                    return (
                      <ShowBoard
                        {...props}
                        currentBoard={currentBoard}
                        currentUser={currentUser}
                        userRole={userRole}
                      />
                    );
                  }
                }}
              />
              <Route
                path="/Chat"
                render={(props) => <Chat {...props} currentUser={currentUser} />}
              ></Route>
              <Route
                path="/Invite"
                render={(props) => {
                  if(currentBoard.length === 0){
                    return <Redirect to="/" />
                  }
                  if(userRole !== "Admin" ){
                    const boardId = currentBoard.boardId
                    return <Redirect to={`/ShowBoard/${boardId}`}/>
                  }
                  else{
                    return(
                  <InviteCoworker
                    {...props}
                    users={users}
                    currentBoard={currentBoard}
                    currentUser={currentUser}
                    displayBoardUsers={displayBoardUsers}
                    boardUsers={boardUsers}
                  />
                );
                  }
                }}
              />
              <Route
                path="/ViewCalendar"
                render={(props) => (
                  <Calendar {...props} currentBoard={currentBoard} userRole={userRole} boardUsers={boardUsers} displayBoardUsers={displayBoardUsers}/>
                )}
              />
              <Route
                path="/Email"
                render={(props) => (
                  <Email {...props} currentBoard={currentBoard} currentUser={currentUser}/>
                )}
              />
            </Switch>
          </div>
        )}
      </Router>
    </React.Fragment>
  );
};

export default App;
