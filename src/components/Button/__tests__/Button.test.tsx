import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("should render successfully", () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });
});
