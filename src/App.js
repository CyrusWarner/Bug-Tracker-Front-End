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
import NavBar from "./Components/NavBar/navBar";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./app.css";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [userBoards, setUsersBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    if (currentUser.length !== 0) {
      getUsers();
      getUsersBoards();
    }
  }, [currentUser]);

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

    //CHANGE THIS BACK TO THIS CALL WHEN FINISHED WITH BACKEND JUNCTION TABLE await axios.get(`http://localhost:27029/api/Board/${userId}`)
    await axios
      .get(`http://localhost:27029/api/Board`)
      .then((res) => {
        if (res.status == 200) {
          setUsersBoards(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //COME BACK AND ADD TOASTIFY
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
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000}/>
      <Router>
        <NavBar currentUser={currentUser} currentBoard={currentBoard} />
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
              if (currentUser.length === 0) {
                return <Redirect to="/Login" />;
              } 
              else if (currentBoard.length === 0){
                return <Redirect to="/"/>
              }
              else {
                return <ShowBoard {...props} currentBoard={currentBoard} currentUser={currentUser}/>;
              }
            }}
          />
          <Route
            path="/Invite"
            render={(props) => (
              <InviteCoworker users={users} currentBoard={currentBoard} />
            )}
          />
          <Route
            path="/ViewCalendar"
            render={(props) => (
              <Calendar {...props} currentBoard={currentBoard} />
            )}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
