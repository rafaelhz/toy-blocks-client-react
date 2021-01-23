import React from "react";
import { shallow } from "enzyme";
import Block from "../components/Block";
import BlocksList from "./BlocksList";

describe("<BlocksList />", () => {
  const blocks = [
      {
        id: 1,
        attributes: {
          data: 'The Human Torch'
        }
      },
      {
        id: 2,
        attributes: {
          data: 'is denied'
        }
      }
    ];

  it("should contain <Blocks List />", () => {
    const wrapper = shallow(<BlocksList blocks={blocks} loading={false}  />);

    expect(wrapper.find(Block).length).toEqual(2);
  });

  it("should show empty blocks message when the block list is empty", () => {
    const wrapper = shallow(<BlocksList blocks={[]} loading={false}  />);

    expect(wrapper.text()).toBe("No blocks found.")
  });


  it("should show the error message when error is not empty", () => {
    const wrapper = shallow(<BlocksList blocks={[]} loading={false} error={"some error"} />);

    expect(wrapper.text()).toBe("some error")
  });

  it("should show loading message when loading is true", () => {
    const wrapper = shallow(<BlocksList blocks={[]} loading={true}  />);

    expect(wrapper.text()).toBe("Loading blocks....")
  });
});
