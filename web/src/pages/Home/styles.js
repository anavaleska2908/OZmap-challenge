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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*padding: 0 38px;*/
`;
export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;