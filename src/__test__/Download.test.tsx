import { render, screen, fireEvent } from "@testing-library/react";
import Download from "../components/Download";

test("renders download buttons", () => {
  render(<Download />);
  expect(screen.getByText(/Download The Rise App/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Start investing/i })).toBeInTheDocument();
});
