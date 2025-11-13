import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("HomePage", () => {
  it('Should return "Nikita" text', () => {
    render(<Home />);

    expect(screen.getByText(/Home/)).toBeDefined();
  });
});
