import styled from 'styled-components';

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   button {
    margin: 0.4em;
   }
   
   div {
    margin-bottom: 1em;
      input {
          margin-left: 0;
      }
      button {
          margin: 0;
          
      }
   }
   
   @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 1.5em;
    }
`

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
    border-bottom: 1px solid var(--color-primary-50);
    margin-bottom: 1em;
    
    button {
        border: 1px solid var(--grey-0);
        color: var(--grey-0);
        border-radius: 8px;
    }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 750px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;