import styled, { css } from 'styled-components'

export const Container = styled.div`
        ${({ theme }) => css`
        > button {
        padding:${theme.spacings.small} ;
        padding-right: ${theme.spacings.large};
        padding-left: ${theme.spacings.large};
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border-radius: 5px;
        border: none;

    }   
    > button:hover{
        cursor: pointer
    }
    `}
    
`;