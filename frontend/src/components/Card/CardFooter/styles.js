import styled, { css } from 'styled-components'

export const Container = styled.footer`
    ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    padding:  ${theme.spacings.small} ${theme.spacings.medium};
    width: fit-content;
    margin-left: auto;

    `}
    
`;