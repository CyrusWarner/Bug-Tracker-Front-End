import { render, screen } from "@testing-library/react";
import Calendar from "../Calendar/Calendar";
import "@testing-library/jest-dom/extend-expect";

describe("when the users role", () => {
    const mockFunction = jest.fn();
    it("is User then the newEventModal should not render", () => {
        render(<Calendar userRole={"User"} currentBoard={{boardId: 1}}/>)
        const newEventModalElement = screen.queryByTestId("newEventModal");
        expect(newEventModalElement).not.toBeInTheDocument();
    })
    it("is Admin then the newEventModal should render", () => {
        render(<Calendar userRole={"Admin"} currentBoard={{boardId: 1}} displayBoardUsers={mockFunction}/>)
        const newEventModalElement = screen.queryByTestId("newEventModal");
        expect(newEventModalElement).toBeInTheDocument();
    })
    it("is Board Owner then the newEventModal should render", () => {
        render(<Calendar userRole={"Board Owner"} currentBoard={{boardId: 1}} displayBoardUsers={mockFunction}/>)
        const newEventModalElement = screen.queryByTestId("newEventModal");
        expect(newEventModalElement).toBeInTheDocument();
    })
})

