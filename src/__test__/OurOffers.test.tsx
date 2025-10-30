import { render, screen } from "@testing-library/react";
import OurOffers from "../components/OurOffers";

test("renders offer titles", () => {
  render(<OurOffers />);
  expect(
    screen.getByText(/we offer diverse investment options/i)
  ).toBeInTheDocument();
});

