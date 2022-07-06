import styled, { css } from 'styled-components'

export const Input = styled.input`
    ${({ theme, width="100%" }) => css`
        padding: ${theme.spacings.xsmall};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        width: ${width};
        margin-bottom: ${theme.spacings.xsmall};
        border-radius: ${theme.spacings.xsmall};
        background-color: ${theme.colors.backgroundPrimary};


    `}
    
`;