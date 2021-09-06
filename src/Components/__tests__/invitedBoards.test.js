import { render, screen, cleanup } from "@testing-library/react";
import InvitedBoards from "../InvitedBoards/invitedBoards";
import "@testing-library/jest-dom/extend-expect";

const testBoard = [
    {
        "userId": 1029,
        "user": null,
        "boardId": 1065,
        "board": {
            "boardId": 1065,
            "title": "Rhenium DevCodeCamp",
            "description": "This is a board for software developers to organize their current bugs and assign bugs to developers to work on.",
            "users": []
        }
    }
]


  test("Should render Invited Boards component", () => {
      render(<InvitedBoards currentUser={{userId: 1}} invitedBoards={[]} />)
      const invitedBoardElement = screen.getByTestId("invitedBoards-1")
      expect(invitedBoardElement).toBeInTheDocument();
  })

  describe("Board invitations title", () => {
    it("with no boards should render You Have No Board Invitations", async () => {
        render(<InvitedBoards  currentUser={{userId: 1}} invitedBoards={[]}/>)
        const invitedBoardTitleElement = screen.queryByText("You Have No Board Invitations")
        expect(invitedBoardTitleElement).toBeInTheDocument();
    })
    it("with boards should render Board Invitations", async () => {
        render(<InvitedBoards  currentUser={{userId: 1}} invitedBoards={testBoard}/>)
        const invitedBoardTitleElement = screen.queryByText("Board Invitations")
        expect(invitedBoardTitleElement).toBeInTheDocument();
    })
  })



  