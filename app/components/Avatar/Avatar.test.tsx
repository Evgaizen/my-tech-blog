import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("Should render image with given imgUrl", () => {
    const imageUrl = "https://some-url";
    render(<Avatar imageUrl={imageUrl} altText="alt-text" href="" />);

    const image = screen.getByRole<HTMLImageElement>("img");
    expect(decodeURIComponent(image.src)).toMatch(new RegExp(imageUrl));
  });

  it("Should render image with given altText", () => {
    const altText = "alt-text";
    render(<Avatar imageUrl="https://some-url" altText={altText} href="" />);

    const image = screen.getByRole<HTMLImageElement>("img");
    expect(image.alt).toBe(altText);
  });

  it("Should render link with given url", () => {
    const url = "https://some-href/";
    render(
      <Avatar imageUrl="https://some-url" altText="alt-text" href={url} />
    );

    const link = screen.getByRole<HTMLAnchorElement>("link");
    expect(link.href).toBe(url);
  });
});
