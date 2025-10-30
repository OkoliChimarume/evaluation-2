import { render, screen } from "@testing-library/react";
import OurExperts from "../components/OurExperts";

test("renders the Experts section", () => {
  render(<OurExperts />);
  const heading = screen.getByText(/meet the/i);
  expect(heading).toBeInTheDocument();
});
