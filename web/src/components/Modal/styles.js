import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: auto;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.324);
`;

export const Content = styled.main`
    width: 80%;
    height: auto;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--white-1);
    border-radius: 8px;
        
    .div_context {
        max-width: 95%;
        margin: 0 auto;
        margin-top: 0.2em;
    } 
    
    .div_header {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5em;
    }
    
    .button_close {
        padding: 0;
        align-self: center;
        border: none;
    }
    
    .button_check {
        padding: 0;
        padding-left: 0.1em;
        border: 1px solid var(--grey-1);
        border-radius: 8px;
    }
    
    svg {
        color: var(--grey-1);  
    }
    
    .div_footer {
        display: flex;
        justify-content: center;
    }
    
    @media (min-width: 425px) {
        width: 50%;
        
        div {
            max-width: 95%;
            align-self: center;            
            margin: 0 auto;
            margin-top: 0.5em;
        }
    }
    
    @media (min-width: 600px) {
        width: 40%;
        border-radius: 8px;
        
        div {
            max-width: 95%;
            align-self: center;            
            margin: 0 auto;
            margin-top: 0.5em;
        }
    }
`;