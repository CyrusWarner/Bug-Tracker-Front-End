import { render, screen } from "@testing-library/react";
import ShowCoworkers from "../ShowCoworkers/showCoworkers";
import "@testing-library/jest-dom/extend-expect";

const testCurrentUser = [
  {
    userId: 1000,
    firstname: "Cyrus",
    lastname: "Warner",
    password: "cwarner27",
    email: "cyruswarner27@gmail.com",
  },
];

const testUser = [
  {
    board: null,
    boardId: 1065,
    inviteAccepted: true,
    roles: {
        roleName: "Board Owner",
        rolesId: 3, 
    },
    rolesId: 3,
    user: {
      userId: 1026,
      firstName: "Ayvien",
      lastName: "Campbell",
      email: "ayviencampbell@gmail.com",
      password: "www",
    },
    userId: 1026
  },
];

test("Show edit user role when a user is a board owner", () => {
    render(
        <ShowCoworkers
          userRole= "Board Owner"
          boardUsers={testUser}
          currentUser={testCurrentUser}
        />
      );
    const editRoleElement = screen.queryByTestId("userRole-1");
    expect(editRoleElement).toBeInTheDocument();
})

test("Do not show edit user role when a user is an admin", () => {
    render(
        <ShowCoworkers
          userRole= "Admin"
          boardUsers={testUser}
          currentUser={testCurrentUser}
        />
      );
    const editRoleElement = screen.queryByTestId("userRole-1");
    expect(editRoleElement).not.toBeInTheDocument();
})

test("Do not show edit user role when a user is the user role", () => {
    render(
        <ShowCoworkers
          userRole= "User"
          boardUsers={testUser}
          currentUser={testCurrentUser}
        />
      );
    const editRoleElement = screen.queryByTestId("userRole-1");
    expect(editRoleElement).not.toBeInTheDocument();
})
