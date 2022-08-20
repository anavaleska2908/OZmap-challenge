import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin-top: 1em;
  
  form button {
    border: 1px solid var(--grey-1);
    color: var(--grey-0);
    border-radius: 10px;
    margin-top: 1em;
    margin-left: 8.5em;
  }
  
  h1 {
    margin-bottom: 1em;
    margin-left: 2.5em;
  }
  
  @media (min-width: 700px) {
    align-self: center;
  }
`;