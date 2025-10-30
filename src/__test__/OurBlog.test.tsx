import { render, screen } from "@testing-library/react";
import OurBlog from "../components/OurBlog";

test("renders Our Blog section", () => {
  render(<OurBlog />);
  const blogButtons = screen.getAllByText(/read the blog/i);
  expect(blogButtons.length).toBeGreaterThan(0);
});
