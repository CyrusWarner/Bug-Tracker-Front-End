import { render, screen } from "@testing-library/react";
import ShowAllIssues from "../ShowAllIssues/ShowAllIssues";
import "@testing-library/jest-dom/extend-expect";

const testIssue = [
    {
        issuesId: 1029,
        title: "Login Form  Line 55 Not Displaying Notification After Successful Login.",
        description: "This Bug happens after a user tries to log in to the website. The login form is working, but the welcome back notification does not display after a user successfully logs in.",
        isCompleted: false,
        boardId: 1065,
        board: null,
        userId: 1029,
        user: null
    },

]

const completedTestIssue = [
    {
        issuesId: 1029,
        title: "Login Form  Line 55 Not Displaying Notification After Successful Login.",
        description: "This Bug happens after a user tries to log in to the website. The login form is working, but the welcome back notification does not display after a user successfully logs in.",
        isCompleted: true,
        boardId: 1065,
        board: null,
        userId: 1029,
        user: null
    },
]
describe("Show all issues title", () => {
    it("with no issues passed to the component the title should display no issues currently", () => {
        render(<ShowAllIssues allIssues={[]} />)
        const issuesTitleElement = screen.queryByText("No Issues Currently");
        expect(issuesTitleElement).toBeInTheDocument();
    })
    it("with issues passed to component the title should not be displaying", () => {
        render(<ShowAllIssues allIssues={testIssue} />)
        const issuesTitleElement = screen.queryByText("No Issues Currently")
        expect(issuesTitleElement).toBeNull();
    })
})

describe("Show all issues search bar", () => {
    it("with no issues search bar should not be rendered",() => {
        render(<ShowAllIssues allIssues={[]}/>)
        const searchBarElement = screen.queryByTestId("allIssues-search")
        expect(searchBarElement).not.toBeInTheDocument();
    })
    it("with issues search bar should be rendered", () => {
        render(<ShowAllIssues allIssues={testIssue}/>)
        const searchBarElement = screen.queryByTestId("allIssues-search")
        expect(searchBarElement).toBeInTheDocument();
    })
})

test("Says bug in progress when the bug is not completed", () => {
    render(<ShowAllIssues allIssues={testIssue}/>)
    const bugNotCompletedElement = screen.getByText("Bug In Progress");
    expect(bugNotCompletedElement).toBeInTheDocument();
})

test("Says bug completed when the bug is checked as complete", () => {
    render(<ShowAllIssues allIssues={completedTestIssue}/>)
    const bugCompletedElement = screen.getByText("Bug Completed");
    expect(bugCompletedElement).toBeInTheDocument();
})

test("update bug component does not display when userRole is User", () => {
    render(<ShowAllIssues allIssues={testIssue} userRole="User"/>)
    const updateBugElement = screen.queryByTestId("update-bug-modal")
    expect(updateBugElement).not.toBeInTheDocument();
})

test("delete bug component does not display when userRole is User", () => {
    render(<ShowAllIssues allIssues={testIssue} userRole="User"/>)
    const deleteBugElement = screen.queryByTestId("delete-bug-modal")
    expect(deleteBugElement).not.toBeInTheDocument();
})

test("update bug component displays when userRole is Admin", () => {
    render(<ShowAllIssues allIssues={testIssue} userRole="Admin" currentUser={{userId: 1}}/>)
    const updateBugElement = screen.queryByTestId("update-bug-modal")
    expect(updateBugElement).toBeInTheDocument();
})

test("delete bug component displays when userRole is Admin", () => {
    render(<ShowAllIssues allIssues={testIssue} userRole="Admin" currentUser={{userId: 1}}/>)
    const deleteBugElement = screen.queryByTestId("delete-bug-modal")
    expect(deleteBugElement).toBeInTheDocument();
})