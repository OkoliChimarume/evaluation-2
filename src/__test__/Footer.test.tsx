import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders copyright text", () => {
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });

  it("contains social or contact links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders newsletter section if available", () => {
    const newsletters = screen.queryAllByText(/newsletter/i);
    expect(newsletters.length).toBeGreaterThan(0);
  });
});
