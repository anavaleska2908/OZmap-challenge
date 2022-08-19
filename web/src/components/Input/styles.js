import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputStyled = styled.div`
  text-align: left;
  border: 1px solid var(--grey-1);
  border-radius: 10px;
  color: var(--grey-0);
  padding: 0.8rem;
  margin-bottom: 0.4em;
  width: 100%;
  display: flex;
  flex: 1;
  
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);        
      }
    `}
    
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin-right: 0.2em;
  }
  
    
`;