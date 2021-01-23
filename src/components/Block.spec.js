import React from "react";
import { shallow } from "enzyme";
import Block from "./Block";

describe("<Block />", () => {
  const block = {
    id: 1,
    attributes: {
      data: "The Human Torch",
    },
  };

  it("should contain <Blocks List />", () => {
    const wrapper = shallow(<Block block={block} />);

    expect(wrapper.text()).toBe("1The Human Torch");
  });
});
