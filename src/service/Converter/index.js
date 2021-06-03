import conversions from './conversions';

const Converter = {

  getCategories: () => Object.keys(conversions),
  getUnitsByCategory: (category) => Object.keys(conversions[category]),
  convert: (category, unitFrom, unitTo, value) => conversions[category][unitFrom][unitTo](value),

};

export default Converter;
