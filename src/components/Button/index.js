import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0.6875rem 1.125rem;
  background-color: #3366ff;
  color: #fff;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1rem;
  text-transform: uppercase;

  transition-duration: 0.15s;
  transition-timing-function: ease-in;

  user-select: none;

  &:hover {
    background-color: #598bff;
  }

  &:active {
    background-color: #274bdb;
  }

  &:focus {
    /* background-color: #274bdb; */
    box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, 0.16);
    /* box-shadow: 0 0 0 0.375rem #2e3a59; */
  }
`;

const Index = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Index;
