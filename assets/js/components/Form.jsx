import styled from 'styled-components';

import { blue, white, darkestGray } from '../colors.js';

export const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 4px;

  @media screen and (max-width: 40em) {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  background-color: ${white};
  padding: 19px;
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    border-color: ${blue};
    box-shadow: 0 1px 2px 1px rgba(12, 123, 251, 0.2);
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${white};
  padding: 19px;
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    border-color: ${blue};
    box-shadow: 0 1px 2px 1px rgba(12, 123, 251, 0.2);
  }
`;

export const Button = styled.input`
  color: ${white};
  background-color: ${blue};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 35px;
  float: right;
  display: block;
  transition: 150ms ease-out background-color;
  -webkit-appearance: none;

  &:hover {

  }
`;

