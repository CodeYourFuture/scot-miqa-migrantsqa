import React from "react";
import QuestionCard from "./QuestionCard";
import { render } from "@testing-library/react";

it("should render a card", () => {
  // Arrange
  const { getByTestId } = render(
    <QuestionCard answers={[]} question={{ content: "mozafar" }} />
  );

  // Act

  // Assert
  expect(getByTestId("cancel-button").textContent).toBe("Cancel");
});
