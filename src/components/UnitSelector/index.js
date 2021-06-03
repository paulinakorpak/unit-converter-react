import React from 'react';
import PropTypes from 'prop-types';
import Select from './styles';

function UnitSelector({ currentUnit, setUnit, units }) {
  const handleChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <Select value={currentUnit} onChange={handleChange}>
      {units.map((unit) => <option key={unit}>{unit}</option>)}
    </Select>
  );
}

export default UnitSelector;

UnitSelector.propTypes = {
  currentUnit: PropTypes.string.isRequired,
  setUnit: PropTypes.func.isRequired,
  units: PropTypes.arrayOf(PropTypes.string).isRequired,
};
