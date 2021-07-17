import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ButtonPage = () => {
  const handleClick = (e) => {
    console.log('supssss');
  };

  return (
    <Center>
      <Button onClick={handleClick}>Button</Button>
    </Center>
  );
};

export default ButtonPage;
