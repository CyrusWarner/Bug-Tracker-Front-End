import { render, screen } from "@testing-library/react";
import DisplayBoards from "../DisplayBoards/displayBoards";
import "@testing-library/jest-dom/extend-expect";

const testBoard = [
    {
        userId: 1029,
        user: null,
        boardId: 1065,
        board: {
            boardId: 1065,
            title: "Rhenium DevCodeCamp",
            description: "This is a board for software developers to organize their current bugs and assign bugs to developers to work on.",
            users: []
        }
    }
]

describe("User boards title", () => {
    it("with no user boards title should say you currently have no boards", () => {
        render(<DisplayBoards userBoards={[]} />)
        const displayBoardTitleElement = screen.queryByText("You currently have no boards")
        expect(displayBoardTitleElement).toBeInTheDocument();
        const displayBoardTitleWithBoards = screen.queryByText("Your Boards")
        expect(displayBoardTitleWithBoards).not.toBeInTheDocument();
    })
    it("with boards title should display your boards", () => {
        render(<DisplayBoards userBoards={testBoard} />)
        const displayBoardTitleElement = screen.queryByText("Your Boards")
        expect(displayBoardTitleElement).toBeInTheDocument();
        const displayBoardTitleWithNoBoards = screen.queryByText("You currently have no boards")
        expect(displayBoardTitleWithNoBoards).not.toBeInTheDocument();
    })
})