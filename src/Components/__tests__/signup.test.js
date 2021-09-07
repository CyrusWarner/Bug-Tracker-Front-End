import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../Signup/signup";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

test("Signup form should be in the document", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const signupFormElement = screen.getByTestId("signup-component");
  expect(signupFormElement).toBeInTheDocument();
});

test("First name input should accept text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const firstNameElement = screen.getByLabelText("First Name...");
  expect(firstNameElement.value).toMatch("");
  fireEvent.change(firstNameElement, {
    target: { value: "testingFirstNameInput" },
  });
  expect(firstNameElement.value).toMatch("testingFirstName");
});

test("Last name input should accept text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const lastNameElement = screen.getByLabelText("Last Name...");
  expect(lastNameElement.value).toMatch("");
  fireEvent.change(lastNameElement, {
    target: { value: "testingLastNameInput" },
  });
  expect(lastNameElement.value).toMatch("testingLastNameInput");
});

test("Email input should accept text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const emailElement = screen.getByLabelText("Email...");
  expect(emailElement.value).toMatch("");
  fireEvent.change(emailElement, {
    target: { value: "testingEmailInput" },
  });
  expect(emailElement.value).toMatch("testingEmailInput");
});

test("Password input should accept text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const passwordElement = screen.getByLabelText("Password...");
  expect(passwordElement.value).toMatch("");
  fireEvent.change(passwordElement, {
    target: { value: "testingPasswordInput" },
  });
  expect(passwordElement.value).toMatch("testingPasswordInput");
});

describe("signup", () => {
  describe("with valid inputs", () => {
    it("calls the onsubmit button", async () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId, getByText } = render(
        <BrowserRouter>
          <Signup onSignupSubmit={mockOnSubmit} />
        </BrowserRouter>
      );
      await act(async () => {
        const firstNameElement = getByTestId("firstName-input");
        fireEvent.change(firstNameElement, {
          target: { value: "Greg" },
        });
        const lastNameElement = getByTestId("lastName-input");
        fireEvent.change(lastNameElement, {
          target: { value: "double" },
        });
        const emailElement = getByTestId("email-input");
        fireEvent.change(emailElement, {
          target: { value: "gregdouble@gmail.com" },
        });
        const passwordElement = getByTestId("password-input");
        fireEvent.change(passwordElement, {
          target: { value: "gregDouble123" },
        });
        await act(async () => {
          const submitBtn = getByText("Complete Signup");
          fireEvent.click(submitBtn);
        });
      });
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
  describe("with invalid inputs", () => {
    it("with invalid first name", async () => {
      render(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      );
      const submitBtn = screen.getByText("Complete Signup");
      await act(async () => {
        fireEvent.click(submitBtn);
      });
      expect(screen.getByText("First Name Is Required")).toBeInTheDocument();
    });
    it("with invalid last name validation should render", async () => {
      render(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      );
      const submitBtn = screen.getByText("Complete Signup");
      await act(async () => {
        fireEvent.click(submitBtn);
      });
      expect(screen.getByText("Last Name Is Required")).toBeInTheDocument();
    });
    it("with invalid email validation should render", async () => {
      render(<BrowserRouter>
      <Signup />
      </BrowserRouter>)
      const submitBtn = screen.getByText("Complete Signup");
      await act(async () => {
        fireEvent.click(submitBtn);
      })
      expect(screen.getByText("Email Is Required")).toBeInTheDocument();
    })
    it("with invalid password input password validation render", async () => {
      render(<BrowserRouter>
      <Signup />
      </BrowserRouter>)
      const submitBtn = screen.getByText("Complete Signup");
      await act(async () => {
        fireEvent.click(submitBtn);
      })
      expect(screen.getByText("Password Is Required")).toBeInTheDocument();
    })
  });
});
