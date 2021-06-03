import React from 'react';
import PropTypes from 'prop-types';
import Input from './styles';

function ValueInput({ disabled, value, setValue }) {
  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <Input
      type="number"
      placeholder="0"
      value={value || ''}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default ValueInput;

ValueInput.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  setValue: PropTypes.func,
};

ValueInput.defaultProps = {
  disabled: false,
  value: null,
  setValue: null,
};
