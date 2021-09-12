import React from 'react';
import {Card, Button} from 'react-bootstrap'
import axios from 'axios';
import './invitedBoards.css'
import { toast } from 'react-toastify';
import * as AiIcons from 'react-icons/ai'
const InvitedBoards = ({invitedBoards, currentUser, displayInvitedBoards, getUsersBoards}) => {
    const {userId} = currentUser;
    const acceptBoardInvite = async (boardData) => {
        await axios.post(`http://localhost:27029/api/Board/acceptBoardInvitation/${userId}`, boardData).then((res) => {
            if (res.status === 200){
                toast.success(`${boardData.title}'s invitation accepted`)
                displayInvitedBoards();
                getUsersBoards();
            }
        })
    }

    const declineBoardInvite = async (boardData) => {
        await axios.delete(`http://localhost:27029/api/Board/removeBoard/${boardData.boardId}/User/${userId}`, boardData).then((res) => {
            if (res.status === 200){
                toast.success(`${boardData.title}'s invitation declined`)
                displayInvitedBoards();
            }
        })
    }
    return (
        <React.Fragment>
        <div data-testid="invitedBoards-1" className="text-center">
            {invitedBoards.length === 0
            ?<h1 className="title">You Have No Board Invitations</h1>
            :<h1 className="title">Board Invitations</h1>
            }
            <div className="invitationWrapper">
            {invitedBoards.map((boardData) => {
                return (
                      <div key={boardData.boardId} className="InvitationItem">
                  {!boardData.inviteAccepted &&
                    <Card  className="cardContainer " style={{ margin: "1rem" }}>
                      <Card.Body className="text-center">
                        <Card.Title>{boardData.board.title}</Card.Title>
                        <hr></hr>
                        <Card.Text>{boardData.board.description}</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Button className="boardButton me-1" onClick={() => acceptBoardInvite(boardData.board)} >Accept Invitation</Button>
                        </div>
                        <div className="position-absolute top-0 end-0">
                            <AiIcons.AiFillDelete color="red" size="1.5rem" cursor="pointer" onClick={() => declineBoardInvite(boardData.board)}/>
                        </div>
                      </Card.Body>
                    </Card>
                    }
                    </div>
                );
              })}
              </div>
        </div>
        </React.Fragment>
    )
}

export default InvitedBoards;