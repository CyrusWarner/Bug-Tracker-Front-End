import React from 'react';
import {Card, Button} from 'react-bootstrap'
import axios from 'axios';
import './invitedBoards.css'
import { toast } from 'react-toastify';
const InvitedBoards = ({userBoards, currentUser, getUsersBoards}) => {

    const acceptBoardInvite = async (boardData) => {
        const {userId} = currentUser;
        await axios.post(`http://localhost:27029/api/Board/acceptBoardInvitation/${userId}`, boardData).then((res) => {
            if (res.status == 200){
                getUsersBoards();
                debugger
                toast.success(`${boardData.title}'s invitation accepted'`)
            }
        })
    }
    console.log(userBoards)
    return (
        <React.Fragment>
        <div className="text-center">
            <h1 className="title">Board Invitations</h1>
            <div className="invitationWrapper">
            {userBoards.map((boardData) => {
                return (
                  <React.Fragment>
                      <div className="InvitationItem">
                  {!boardData.inviteAccepted &&
                    <Card  className="cardContainer " style={{ width: "18rem", margin: "1rem" }}>
                      <Card.Body className="text-center">
                        <Card.Title>{boardData.board.title}</Card.Title>
                        <hr></hr>
                          <Button className="boardButton" onClick={() => acceptBoardInvite(boardData.board)} >Accept Invitation</Button>
                      </Card.Body>
                    </Card>
                    }
                    </div>
                    </React.Fragment>
                );
              })}
              </div>
        </div>
        </React.Fragment>
    )
}

export default InvitedBoards;