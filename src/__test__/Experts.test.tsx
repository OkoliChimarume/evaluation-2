import { render, screen } from "@testing-library/react";
import Experts from "../components/Experts";

test("renders Experts heading", () => {
  render(<Experts />);
  const heading = screen.getByRole("heading", { name: /managed by/i });
  expect(heading).toBeInTheDocument();
});
