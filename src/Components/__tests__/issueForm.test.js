import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import IssueForm from "../IssueForm/issueForm";
import "@testing-library/jest-dom/extend-expect";



describe("Create a new bug", () => {
  describe("with valid inputs", () => {
    it("calls the onsubmit button", async () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId, getByRole, getByLabelText } = render(
        <IssueForm
          currentUser={{ userId: 1 }}
          currentBoard={{
            title: "TestBoard",
            description: "This is a test",
            boardId: 1,
          }}
          onSubmit={mockOnSubmit}
        />
      );
      await act(async () => {
        fireEvent.change(getByLabelText("New Bug Title..."), {
          target: { value: "this is a bug title test" },
        
        });
        fireEvent.change(getByTestId("issueForm-1"), {
          target: { value: "this is a test description" },
        });
      });
        await act(async () => {
            const submitBtn = getByRole("button");
            fireEvent.click(submitBtn);
        })
        expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
  describe("with invalid inputs", () => {
    it("with invalid title input", async () => {
      const {getByText, getByRole}= render(<IssueForm />);
    const submitBtn = getByRole("button");
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    expect(getByText("Bug Title Is Required")).toBeInTheDocument();
  });
  it("with invalid description input", async () => {
    const {getByText, getByRole}= render(<IssueForm />);
  const submitBtn = getByRole("button");
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(getByText("Bug Description Is Required")).toBeInTheDocument();
});
})
})
