import { render, screen } from "@testing-library/react";
import OurNumbers from "../components/OurNumbers";

test("renders stats and countries", () => {
  render(<OurNumbers />);
  const usersLabels = screen.getAllByText(/Users/i);
  expect(usersLabels.length).toBeGreaterThan(0);
  expect(screen.getByText(/Countries/i)).toBeInTheDocument();
});

