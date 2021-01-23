import React from "react";
import { shallow } from "enzyme";
import Node from "../components/Node";
import BlocksList from "./BlocksList";

describe("<Node />", () => {
  const node = {
    url: "https://thawing-springs-53971.herokuapp.com",
    online: false,
    name: "Node 1",
    loading: false,
    blocks: [
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
    ]
  };

  it("should contain <Blocks List />", () => {
    const wrapper = shallow(<Node node={node} expanded={true} toggleNodeExpanded={() => null} />);

    expect(wrapper.find(BlocksList).length).toEqual(1);
  });
});
