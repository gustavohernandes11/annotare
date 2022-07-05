import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
        padding:${theme.spacings.xsmall} ;
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border-radius: 5px;
        color: ${theme.name === 'light' ? theme.colors.white : theme.colors.primary};
        border: ${theme.name === 'rainbow' ? `1px solid ${theme.colors.border}` : 'none'};
        box-shadow: ${theme.name === 'light' ? '4px 4px 10px rgb(0, 0, 0, .1)' : 'none'};


    `}
    :hover {
        cursor: pointer;
    }
    
`;