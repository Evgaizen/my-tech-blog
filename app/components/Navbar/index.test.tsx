import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "./index";

const LINKS = [
  {
    text: "Test1",
    url: "https://ya.ru/",
  },
  {
    text: "Test2",
    url: "https://google.com/",
  },
];

describe("Navbar", () => {
  it("Should have links with given links array", () => {
    render(<Navbar links={LINKS} />);

    LINKS.forEach((el) => {
      const link = screen.getByText<HTMLAnchorElement>(new RegExp(el.text));

      expect(link).toBeDefined();
      expect(link.href).toBe(el.url);
    });
  });
});
