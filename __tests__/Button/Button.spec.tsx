import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { Button } from "../../src/components/Button";

const handleClick = jest.fn();

describe("<Button />", () => {
  test("should render the Button", () => {
    const { baseElement } = render(
      <Button handleClick={handleClick} label="Hello World" />
    );

    expect(baseElement).toMatchSnapshot();
  });

  test("should exec handleClick", () => {
    render(<Button handleClick={handleClick} label="Click Me!" />);

    const btn = screen.getByText("Click Me!");

    act(async () => await fireEvent.click(btn));

    expect(handleClick).toHaveBeenCalled();
  });
});
