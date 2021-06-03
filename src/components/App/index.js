import React from 'react';
import CategorySelector from '../CategorySelector';
import UnitSelector from '../UnitSelector';
import ValueInput from '../ValueInput';
import {
  GlobalStyle, Wrapper, Title, Form, FormRow,
} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Unit Converter React</Title>
        <Form>
          <CategorySelector />
          <FormRow>
            <ValueInput />
            <UnitSelector />
          </FormRow>
          <FormRow>
            <ValueInput />
            <UnitSelector />
          </FormRow>
        </Form>
      </Wrapper>
    </>
  );
}

export default App;
