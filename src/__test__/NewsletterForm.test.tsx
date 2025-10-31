import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Newsletter } from "../components/Footer";

describe("Newsletter Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows error for invalid email", async () => {
    render(<Newsletter />);
    fireEvent.change(screen.getByTestId("first-name-input"), {
      target: { value: "Uju" },
    });
    fireEvent.change(screen.getByTestId("last-name-input"), {
      target: { value: "Okoli" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "invalidemail" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(await screen.findByTestId("error-message")).toHaveTextContent(
      "Invalid email address"
    );
  });

  it("shows success message on valid submission", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Subscribed successfully!" }),
      })
    ) as jest.Mock;

    render(<Newsletter />);
    fireEvent.change(screen.getByTestId("first-name-input"), {
      target: { value: "Princess" },
    });
    fireEvent.change(screen.getByTestId("last-name-input"), {
      target: { value: "Okoli" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "princess@okoli.com" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(screen.getByTestId("success-message")).toHaveTextContent(
        "Subscribed successfully!"
      );
    });
  });

  it("handles API failure gracefully", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: "Subscription failed" }),
      })
    ) as jest.Mock;

    render(<Newsletter />);
    fireEvent.change(screen.getByTestId("first-name-input"), {
      target: { value: "Chris" },
    });
    fireEvent.change(screen.getByTestId("last-name-input"), {
      target: { value: "Stone" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "chris@stone.com" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "Subscription failed"
      );
    });
  });
});
