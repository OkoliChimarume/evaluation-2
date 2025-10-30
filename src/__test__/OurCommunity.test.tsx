import { render, screen } from "@testing-library/react";
import OurCommunity from "../components/OurCommunity";

test("renders community heading", () => {
  render(<OurCommunity />);
  expect(
    screen.getByRole("heading", { name: /join the rise community/i })
  ).toBeInTheDocument();
});
