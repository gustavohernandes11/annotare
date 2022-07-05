import styled, { css } from 'styled-components'

export const Container = styled.div`
        ${({ theme }) => css`
        > button {
        padding:${theme.spacings.small} ;
        padding-right: ${theme.spacings.large};
        padding-left: ${theme.spacings.large};
        color:${theme.colors.primary};
        

        background: transparent;
        border-radius: 5px;
        margin-inline: ${theme.spacings.xsmall};
        
        
    }   
        > button[primary = true] {
            background: ${theme.colors.secondary};
            border: ${theme.name === 'rainbow' ? `1px solid ${theme.colors.border}` : 'none'};
            color: ${theme.name === 'light' ? theme.colors.white : theme.colors.primary};

        }
    > button:hover{
        cursor: pointer
    }
    `}
    
`;