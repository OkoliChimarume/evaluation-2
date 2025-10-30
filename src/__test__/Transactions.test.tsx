import { render, screen } from "@testing-library/react";
import Transactions from "../components/Transactions";

test("renders transaction heading", () => {
  render(<Transactions />);
  expect(screen.getByText(/Make transactions online/i)).toBeInTheDocument();
});
