import styled, { css } from 'styled-components'

export const Container = styled.main`
    ${({ theme }) => css`
    display: grid;
    width: 100%;
    color: ${theme.colors.primary};
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.large};
    

    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.small};

     h3 {
        margin-bottom:  ${theme.spacings.medium};
    }
    
    `}
    
`