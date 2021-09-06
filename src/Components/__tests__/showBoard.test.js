import { render, screen, cleanup } from "@testing-library/react";
import ShowBoard from "../ShowBoard/showBoard";
import "@testing-library/jest-dom/extend-expect";


const displayBoardUsers = jest.fn();

test("Should render ShowBoard component", () => {
  render(
    <ShowBoard
      currentBoard={{
        title: "TestBoard",
        description: "This is a test",
        boardId: 1,
      }}
      displayBoardUsers={displayBoardUsers}
    />
  );
  const showBoardElement = screen.getByTestId("showBoard-1");
  expect(showBoardElement).toBeInTheDocument();
});

describe("Board Role Check", () => {
  it("As an user I cannot create a new bug", async () => {
    const component = render(
      <ShowBoard
        userRole="User"
        currentBoard={{
          title: "TestBoard",
          description: "This is a test",
          boardId: 1,
        }}
        displayBoardUsers={displayBoardUsers}
        currentUser={{userId: 1}}
      />
    );
    const roleElement = screen.queryByTestId("showBoard-2");
    expect(roleElement).toBe(null);
  });
  it("As an admin I can create a new bug", async () => {
      const component = render(
        <ShowBoard
        userRole="Admin"
        currentBoard={{
          title: "TestBoard",
          description: "This is a test",
          boardId: 1,
        }}
        displayBoardUsers={displayBoardUsers}
        currentUser={{userId: 1}}
      />
      );
      const roleElement = screen.getByTestId("showBoard-2")
      expect(roleElement).toBeInTheDocument();
  })
  it("As an Board Owner I can create a new bug", async () => {
    const component = render(
      <ShowBoard
      userRole="Board Owner"
      currentBoard={{
        title: "TestBoard",
        description: "This is a test",
        boardId: 1,
      }}
      displayBoardUsers={displayBoardUsers}
      currentUser={{userId: 1}}
    />
    );
    const roleElement = screen.getByTestId("showBoard-2")
    expect(roleElement).toBeInTheDocument();
})
});
