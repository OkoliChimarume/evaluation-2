import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders footer links and text", () => {
  render(<Footer />);
  expect(screen.getByText(/©/i)).toBeInTheDocument();
});
