import React from "react";
import PropTypes from "prop-types";

// TODO use useStyles
const styles = {
  container: {
    background: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 2,
    width: '100%',
    padding: 8,
    marginBottom: 6
  },
  idText: {
    fontWeight: 'bold',
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#304FFE',
  },
  dataText: {
    fontWeight: 'normal',
    fontSize: '14px',
    letterSpacing: '0.25px',
    color: '#263238'
  }
};

const Block = ({ block }) => {
  return (
    <div style={styles.container}>
      <div style={styles.idText}>{block.id}</div>
      <div>{block.attributes.data}</div>
    </div>
  )
};

Block.propTypes = {
  block: PropTypes.object.isRequired,
};

export default Block;

