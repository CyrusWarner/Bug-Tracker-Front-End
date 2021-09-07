import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar/navBar";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

const testUser = [
  {
    userId: 1,
    firstname: "Cyrus",
    lastname: "Warner",
    password: "cwarner27",
    email: "cyruswarner27@gmail.com",
  },
];


const testBoard = [
  {
    title: "TestBoard",
    description: "This is a test",
    boardId: 1,
  },
];
//logout, allBoards, signup, login, board Home, invite user link, notes link, chat link, email link  links completed
describe("Navbar", () => {
    test("Renders all boards link when there is no current board", async () => {
        render(
          <BrowserRouter>
            <NavBar currentBoard={[]} currentUser={testUser} />
          </BrowserRouter>
        );
        const allBoardsLinkElement = screen.getByText("All Boards");
        expect(allBoardsLinkElement).toBeInTheDocument();
      });
      test("Renders all boards link when there is a current board and a current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} />
            </BrowserRouter>
          );
          const allBoardsLinkElement = screen.getByText("All Boards");
        expect(allBoardsLinkElement).toBeInTheDocument();
      })
      test("Does not render all boards link does not render when there is no current board and no current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]} />
            </BrowserRouter>
          );
          const allBoardsLinkElement = screen.queryByText("All Boards");
          expect(allBoardsLinkElement).not.toBeInTheDocument();
      })
      test("Renders logout link when there is no current board", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={testUser} />
            </BrowserRouter>
          );
          const logoutLinkElement = screen.getByText("Logout");
          expect (logoutLinkElement).toBeInTheDocument();
      })
      test("Renders logout link when there is a current board and a current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} />
            </BrowserRouter>
          );
          const logoutLinkElement = screen.getByText("Logout");
          expect (logoutLinkElement).toBeInTheDocument();
      })
      test("Does not render logout link when there is no current board and no current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]} />
            </BrowserRouter>
          );
          const logoutLinkElement = screen.queryByText("Logout");
          expect (logoutLinkElement).not.toBeInTheDocument();
      })
      test("Renders login link when there is no current user and no current board", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]} />
            </BrowserRouter>
          );
          const loginLinkElement = screen.getByText("Login");
          expect(loginLinkElement).toBeInTheDocument();
      })
      test("does not render login link when there is a current user and a current board", () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} />
            </BrowserRouter>
          );
          const loginLinkElement = screen.queryByText("Login");
          expect(loginLinkElement).not.toBeInTheDocument();
      })
      test("Renders signup link when there is no current user and no current board", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]} />
            </BrowserRouter>
          );
          const signUpLinkElement = screen.getByText("Signup");
          expect(signUpLinkElement).toBeInTheDocument();
      })
      test("Does not render signup link when there is a current user and a current board", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} />
            </BrowserRouter>
          );
          const signUpLinkElement = screen.queryByText("Signup");
          expect(signUpLinkElement).not.toBeInTheDocument();
      })
      test("Renders board home link when there is a current board and a current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} />
            </BrowserRouter>
          );
          const boardHomeLinkElement = screen.getByText("Board Home");
          expect(boardHomeLinkElement).toBeInTheDocument();
      })
      test("Does not render board home link when there is no current board and no current user", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]} />
            </BrowserRouter>
          );
          const boardHomeLinkElement = screen.queryByText("Board Home");
          expect(boardHomeLinkElement).not.toBeInTheDocument();
      })
      test("Renders invite user link when there is a current user, a current board and the users role is Admin", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} userRole="Admin" />
            </BrowserRouter>
          );
          const InviteLinkUserElement = screen.getByText("Invite Users")
          expect(InviteLinkUserElement).toBeInTheDocument();
      })
      test("Renders invite user link when there is a current user, a current board and the users role is Board Owner", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} userRole="Board Owner" />
            </BrowserRouter>
          );
          const InviteLinkUserElement = screen.getByText("Invite Users")
          expect(InviteLinkUserElement).toBeInTheDocument();
      })
      test("does not render invite user link when there is a current user, a current board and the users role is User", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={testBoard} currentUser={testUser} userRole="User" />
            </BrowserRouter>
          );
          const InviteLinkUserElement = screen.queryByText("Invite Users")
          expect(InviteLinkUserElement).not.toBeInTheDocument();
      })
      test("does not render invite user link when there is no current user and no current board", async () => {
        render(
            <BrowserRouter>
              <NavBar currentBoard={[]} currentUser={[]}  />
            </BrowserRouter>
          );
          const InviteLinkUserElement = screen.queryByText("Invite Users")
          expect(InviteLinkUserElement).not.toBeInTheDocument();
      })
      test("Renders notes link when there is a current user and a current board", async () => {
        render(
          <BrowserRouter>
            <NavBar currentBoard={testBoard} currentUser={testUser}  />
          </BrowserRouter>
        );
        const NotesLinkElement = screen.getByText("Notes")
        expect(NotesLinkElement).toBeInTheDocument();
    })
    test("does not render notes link when there is no current user and no current board", async () => {
      render(
        <BrowserRouter>
          <NavBar currentBoard={[]} currentUser={[]}  />
        </BrowserRouter>
      );
      const NotesLinkElement = screen.queryByText("Notes")
      expect(NotesLinkElement).not.toBeInTheDocument();
  })
  test("Renders chat link when there is a current user and a current board", async () => {
    render(
      <BrowserRouter>
        <NavBar currentBoard={testBoard} currentUser={testUser}  />
      </BrowserRouter>
    );
    const ChatLinkElement = screen.getByText("Chat")
    expect(ChatLinkElement).toBeInTheDocument();
  })
  test("does not render chat link when there is no current user and no current board", async () => {
    render(
      <BrowserRouter>
        <NavBar currentBoard={[]} currentUser={[]}  />
      </BrowserRouter>
    );
    const ChatLinkElement = screen.queryByText("Chat")
    expect(ChatLinkElement).not.toBeInTheDocument();
  })
  test("Renders email link when there is a current user and a current board", async () => {
    render(
      <BrowserRouter>
        <NavBar currentBoard={testBoard} currentUser={testUser}  />
      </BrowserRouter>
    );
    const EmailLinkElement = screen.getByText("Email")
    expect(EmailLinkElement).toBeInTheDocument();
  })
  test("does not render email link when there is no current user and no current board", async () => {
    render(
      <BrowserRouter>
        <NavBar currentBoard={[]} currentUser={[]}  />
      </BrowserRouter>
    );
    const EmailLinkElement = screen.queryByText("Email")
    expect(EmailLinkElement).not.toBeInTheDocument();
  })

})

