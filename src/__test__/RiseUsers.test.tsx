import { render, screen } from "@testing-library/react";
import RiseUsers from "../components/RiseUsers";

test("renders the Rise Users section", () => {
  render(<RiseUsers />);
  const heading = screen.getByText(/rise users/i);
  expect(heading).toBeInTheDocument();
});
