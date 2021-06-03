import React from 'react';
import PropTypes from 'prop-types';
import Select from './styles';

function CategorySelector({ currentCategory, categories, setCategory }) {
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Select value={currentCategory} onChange={handleChange}>
      {categories.map((category) => <option key={category}>{category}</option>)}
    </Select>
  );
}

export default CategorySelector;

CategorySelector.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCategory: PropTypes.func.isRequired,
};
