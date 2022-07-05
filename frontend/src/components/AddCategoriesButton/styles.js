import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
        padding:${theme.spacings.xsmall} ;
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border-radius: 5px;
        color: ${theme.name === 'light' ? theme.colors.white : theme.colors.primary};
        border: ${theme.name === 'rainbow' ? `1px solid ${theme.colors.border}` : 'none'};

    `}
    :hover {
        cursor: pointer;
    }
    
`;