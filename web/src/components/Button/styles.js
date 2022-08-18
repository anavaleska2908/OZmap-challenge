import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 1em 1em 1em 1em;
  border: none;
  background-color: var(--white-1);
  color: var(--color-primary);
  outline: none;
  margin: -0.2em 1em 1em 1em;
  border-radius: 18px;
  font-size: 0.8em;
  font-weight: medium;
  cursor: pointer;
  max-width: 170px;
  border: 1px solid var(--color-primary);

  :hover {
    background-color: var(--color-primary-50);
  }
`;

