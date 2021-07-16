import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 25rem;
  background-color: aqua;
`;

const App = () => {
  return (
    <div>
      <Title>App</Title>;
    </div>
  );
};

export default App;
