import React from "react";
import { render } from "@testing-library/react";
import CategoryCard from "../CategoryCard";


describe("CategoryCard component", () => {
  it("renders with correct props", () => {
    const props = {
      rectangle1426: "image-url.jpg",
      mUSIC: "Music Category",
      propLeft: "10px",
    };

    const { getByText, getByAltText } = render(<CategoryCard {...props} />);

    expect(getByText("Music Category")).toBeInTheDocument();
    expect(getByAltText("")).toHaveAttribute("src", "image-url.jpg");
    expect(document.querySelector(".card")).toHaveStyle({ left: "10px" });
  });
});
