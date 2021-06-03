import React, { useEffect, useState } from 'react';
import CategorySelector from '../CategorySelector';
import UnitSelector from '../UnitSelector';
import ValueInput from '../ValueInput';
import Converter from '../../service/Converter';
import {
  GlobalStyle, Wrapper, Title, Form, FormRow,
} from './styles';

const categories = Converter.getCategories();
let units = Converter.getUnitsByCategory(categories[0]);

function App() {
  const [category, setCategory] = useState(categories[0]);
  const [unitFrom, setUnitFrom] = useState(units[0]);
  const [unitTo, setUnitTo] = useState(units[1]);
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);

  useEffect(
    () => {
      units = Converter.getUnitsByCategory(category);
      setUnitFrom(units[0]);
      setUnitTo(units[1]);
      setValueFrom(0);
      setValueTo(0);
    },
    [category],
  );

  useEffect(
    () => {
      setValueTo(Converter.convert(category, unitFrom, unitTo, valueFrom));
    },
    [unitFrom, unitTo, valueFrom],
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Unit Converter React</Title>
        <Form>
          <CategorySelector
            currentCategory={category}
            setCategory={setCategory}
            categories={categories}
          />
          <FormRow>
            <ValueInput
              value={valueFrom}
              setValue={setValueFrom}
            />
            <UnitSelector
              currentUnit={unitFrom}
              setUnit={setUnitFrom}
              units={units}
            />
          </FormRow>
          <FormRow>
            <ValueInput
              disabled
              value={valueTo}
            />
            <UnitSelector
              currentUnit={unitTo}
              setUnit={setUnitTo}
              units={units}
            />
          </FormRow>
        </Form>
      </Wrapper>
    </>
  );
}

export default App;
