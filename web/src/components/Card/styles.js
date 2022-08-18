import styled from 'styled-components';

export const LiStyled = styled.li`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: 8px;
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid var(--grey-0);    
    
    h2 {
        color: var(--grey-0);
        padding-left: 0;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        align-self: center;
        font-size: 1.3em;
    }
    
    @media (min-width: 500px) {
        justify-content: space-between;
        width: 14.5em;
        align-items: center;
        margin-left: 0.5em;
        margin-right: 0.5em;
        
        
        h2 {
            color:var(--grey-0);
            padding-left: 0;
            margin-top: 0.2em;
            margin-bottom: 0.6em;
            text-align: center;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    align-items: flex-start;
    
    p {
        color: var(--grey-0);
        margin-bottom: 0.5em;
        font-size: 0.8em;
    }
    
    @media (min-width: 500px) {
        width: 12em;
    }
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
    
    svg {
        color: var(--grey-0);        
    }
    button {
        border: 1px solid var(--grey-0);
        padding: 0.5em;
    }
    
    button:hover {
    background-color: var(--grey-2);
  }
`;
