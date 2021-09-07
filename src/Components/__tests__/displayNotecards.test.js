import { render, screen } from "@testing-library/react";
import DisplayNotecards from "../DisplayNotecards/displayNotecards";
import "@testing-library/jest-dom/extend-expect";

const testNote = [
    {
        title: "This is a note",
        description: "This is a description",
        userId: 1,
        boardId: 2
    }
]

describe("note card title", () => {
    it("displayNoteCards component has no notes title should display you have no notes currently", async () => {
        render(<DisplayNotecards allNotes={[]} />)
        const titleElement = screen.getByText("You Have No Notes Currently");
        expect(titleElement).toBeInTheDocument();
    })
    it("display Notecards component has no notes title should not display you have no notes currently", async () => {
        render(<DisplayNotecards allNotes={testNote} currentBoard={{boardId: 1}} currentUser={{userId:1}}/>)
        const titleElement = screen.queryByText("You have no notes currently");
        expect(titleElement).not.toBeInTheDocument();
    })
})

describe("Notecards", () => {
    it("searchBar should not appear if notecards are in the document", async () => {
        render(<DisplayNotecards allNotes={[]} />)
        const searchBarElement = screen.queryByTestId("notecards-search");
        expect(searchBarElement).not.toBeInTheDocument();
    })
    it("searchBar should appear if notecards are in the document", async () => {
        render(<DisplayNotecards allNotes={testNote} currentBoard={{boardId: 1}} currentUser={{userId:1}}/>)
        const searchBarElement = screen.queryByTestId("notecards-search");
        expect(searchBarElement).toBeInTheDocument();
    })
})