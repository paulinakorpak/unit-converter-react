import React from 'react';
import Select from './styles';

function CategorySelector() {
  return (
    <Select>
      <option>Temperature</option>
      <option>Weight</option>
      <option>Length</option>
    </Select>
  );
}

export default CategorySelector;
