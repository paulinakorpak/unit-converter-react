import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  --mainColor: #587AA6;
  --secondColor: #4C4D4E;
  --borderColor: #E0E0E0;
  }
  
  body {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
    font-size: 10px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
  *, *:before, *:after {
  box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--mainColor);
  text-align: center;
  
  @media (min-width: 768px) {  
    font-size: 2.5rem;
  }
`;

export const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  @media (min-width: 768px) {  
    width: 50%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
`;
