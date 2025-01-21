import React from 'react';
import PropTypes from 'prop-types';

const Combo = ({ options }) => {
  return (
    <div style={styles.container}>
      <select style={styles.select}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Combo.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start', // Alinha à esquerda
    alignItems: 'center',
    padding: '10px',
  },
  select: {
    padding: '5px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
  },
};

export default Combo;