import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Login from "../Login/login";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";


test("Login form should be in the document", () => {
  const component = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginFormElement = component.getByText("Email...");
  expect(loginFormElement).toBeInTheDocument();
});

test("email input should accept text", () => {
  const component = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElement = screen.getByTestId("login-1");
  expect(emailInputElement.value).toMatch("");
  fireEvent.change(emailInputElement, { target: { value: "testing" } });
  expect(emailInputElement.value).toMatch("testing");
});

test("password input should accept text", () => {
  const component = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElement = screen.getByTestId("login-2");
  expect(emailInputElement.value).toMatch("");
  fireEvent.change(emailInputElement, { target: { value: "testing" } });
  expect(emailInputElement.value).toMatch("testing");
});

describe("Login", () => {
  describe("With valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId, getByText } = render(
        <BrowserRouter>
          <Login onSubmit={mockOnSubmit} />
        </BrowserRouter>
      );
      await act(async () => {
        fireEvent.change(getByTestId("login-1"), {
          target: { value: "email@test.com" },
        });
        fireEvent.change(getByTestId("login-2"), { target: { value: "www" } });
      });
      await act(async () => {
        const submitBtn = getByTestId("login-3");
        fireEvent.click(submitBtn);
      });
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
