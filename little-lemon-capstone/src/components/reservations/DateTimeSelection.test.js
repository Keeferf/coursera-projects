// src/components/DateTimeSelection.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DateTimeSelection from "./DateTimeSelection";

describe("DateTimeSelection Component", () => {
  const mockOnContinue = jest.fn();

  beforeEach(() => {
    mockOnContinue.mockClear();
  });

  describe("Static Text Rendering", () => {
    test('renders "Select Date" heading', () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      expect(screen.getByText("Select Date")).toBeInTheDocument();
    });

    test('renders "Select Time" heading', () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      expect(screen.getByText("Select Time")).toBeInTheDocument();
    });

    test('renders "Continue to Guest Details" button', () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      expect(screen.getByText("Continue to Guest Details")).toBeInTheDocument();
    });
  });

  describe("Initial State", () => {
    test("continue button is disabled when no date or time selected", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const continueButton = screen.getByText("Continue to Guest Details");
      expect(continueButton).toBeDisabled();
    });

    test("no selected info displayed initially", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const selectedInfo = screen.queryByText(/Selected:/i);
      expect(selectedInfo).not.toBeInTheDocument();
    });
  });

  describe("Date Selection", () => {
    test("clicking a date button selects it", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      fireEvent.click(dateButtons[0]);

      expect(dateButtons[0]).toHaveClass("selected");
    });

    test("clicking a different date deselects previous date", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      fireEvent.click(dateButtons[0]);
      fireEvent.click(dateButtons[1]);

      expect(dateButtons[0]).not.toHaveClass("selected");
      expect(dateButtons[1]).toHaveClass("selected");
    });

    test("selecting a date displays selected info", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      fireEvent.click(dateButtons[0]);

      const selectedInfo = screen.getByText(/Selected:/i);
      expect(selectedInfo).toBeInTheDocument();
    });

    test("only one date can be selected at a time", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      fireEvent.click(dateButtons[0]);
      fireEvent.click(dateButtons[2]);
      fireEvent.click(dateButtons[4]);

      const selectedDates = dateButtons.filter((button) =>
        button.className.includes("selected"),
      );
      expect(selectedDates).toHaveLength(1);
    });
  });

  describe("Time Selection", () => {
    test("clicking a time button selects it", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(timeButtons[0]);

      expect(timeButtons[0]).toHaveClass("selected");
    });

    test("clicking a different time deselects previous time", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(timeButtons[0]);
      fireEvent.click(timeButtons[1]);

      expect(timeButtons[0]).not.toHaveClass("selected");
      expect(timeButtons[1]).toHaveClass("selected");
    });

    test("only one time can be selected at a time", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(timeButtons[0]);
      fireEvent.click(timeButtons[2]);
      fireEvent.click(timeButtons[4]);

      const selectedTimes = timeButtons.filter((button) =>
        button.className.includes("selected"),
      );
      expect(selectedTimes).toHaveLength(1);
    });
  });

  describe("Continue Button State", () => {
    test("continue button disabled when only date selected", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      fireEvent.click(dateButtons[0]);

      const continueButton = screen.getByText("Continue to Guest Details");
      expect(continueButton).toBeDisabled();
    });

    test("continue button disabled when only time selected", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(timeButtons[0]);

      const continueButton = screen.getByText("Continue to Guest Details");
      expect(continueButton).toBeDisabled();
    });

    test("continue button enabled when both date and time selected", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(dateButtons[0]);
      fireEvent.click(timeButtons[0]);

      const continueButton = screen.getByText("Continue to Guest Details");
      expect(continueButton).toBeEnabled();
    });
  });

  describe("Continue Function", () => {
    test("clicking continue calls onContinue with selected date and time", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(dateButtons[0]);
      fireEvent.click(timeButtons[0]);

      const continueButton = screen.getByText("Continue to Guest Details");
      fireEvent.click(continueButton);

      expect(mockOnContinue).toHaveBeenCalledTimes(1);
      expect(mockOnContinue).toHaveBeenCalledWith({
        date: expect.any(Date),
        time: expect.any(String),
      });
    });

    test("onContinue receives correct time value", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));

      fireEvent.click(dateButtons[0]);
      fireEvent.click(timeButtons[2]); // Select third time slot

      const continueButton = screen.getByText("Continue to Guest Details");
      fireEvent.click(continueButton);

      const callArg = mockOnContinue.mock.calls[0][0];
      expect(callArg.time).toBe("18:00");
    });
  });

  describe("Calendar Generation", () => {
    test("generates 21 date buttons", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));
      expect(dateButtons).toHaveLength(21);
    });

    test("first date is today", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const today = new Date().getDate();
      const dateButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("date-button"));

      expect(dateButtons[0]).toHaveTextContent(today.toString());
    });
  });

  describe("Time Slots Generation", () => {
    test("generates 12 time slot buttons", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const timeButtons = screen
        .getAllByRole("button")
        .filter((button) => button.className.includes("time-button"));
      expect(timeButtons).toHaveLength(12);
    });

    test("displays correct time slots", () => {
      render(<DateTimeSelection onContinue={mockOnContinue} />);
      const expectedTimes = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
      ];

      expectedTimes.forEach((time) => {
        expect(screen.getByText(time)).toBeInTheDocument();
      });
    });
  });
});
