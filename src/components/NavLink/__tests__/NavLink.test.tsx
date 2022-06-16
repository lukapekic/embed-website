import { render } from "@testing-library/react";
import { NavLink } from "../NavLink";

describe("NavLink", () => {
  it("should render successfully", () => {
    const component = render(<NavLink />);
    expect(component).toMatchSnapshot();
  });
});
