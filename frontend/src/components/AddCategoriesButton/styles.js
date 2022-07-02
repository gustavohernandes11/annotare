import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
        padding:${theme.spacings.xsmall} ;
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border: none;
        border-radius: 5px;
    `}
    :hover {
        cursor: pointer;
    }
    
`;