import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1em;
  
  form button {
    border: 1px solid var(--grey-1);
    color: var(--grey-0);
    border-radius: 10px;
    margin-top: 1em;
    margin-left: 7.8em;
  }
  
  h1 {
    margin-bottom: 0.5em;
    margin-left: 1.8em;

  }
  
  @media (min-width: 700px) {
    align-self: center;
  }
`;