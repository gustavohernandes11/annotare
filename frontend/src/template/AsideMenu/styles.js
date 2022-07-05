import styled, { css } from 'styled-components'

export const Container = styled.aside`
    ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    padding: ${theme.spacings.large};
    padding-inline: ${theme.spacings.small};
    background-color: ${theme.colors.backgroundSecondary} ;
    font-size: ${theme.sizes.small};
    color: ${theme.colors.primary};
    
    box-shadow: 4px 4px 10px rgb(0, 0, 0, .1);

    `}
`;
