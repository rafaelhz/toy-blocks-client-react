import React from "react";
import PropTypes from "prop-types";
import Block from "./Block";

const BlocksList = ({ blocks, loading, error }) => {

  if (loading) {
    return (
      <div>Loading blocks....</div>
    )
  }

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (!blocks || blocks.length == 0) {
    return (
      <div>No blocks found.</div>
    )
  }

  return (
    <div style={{width: '100%'}}>
      {blocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  )
};

BlocksList.propTypes = {
  blocks: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default BlocksList;

