import styled, { css } from 'styled-components'

export const Input = styled.input`
    ${({ theme, height, width="100%", marginBottom = 0, padding = theme.spacings.small }) => css`
        padding: ${padding};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        width: ${width};
        height: ${height};
        margin-bottom: ${marginBottom};
        border-radius: ${theme.spacings.xsmall};
        background-color: ${theme.colors.backgroundPrimary};
        resize: none;
        font-family: inherit;
        font-size: medium;
        
    `}
    
`;

export const Span = styled.span`
    ${({ theme, width = "100%" }) => css`
        width: ${width};
        color: ${theme.colors.primary};
        font-size: ${theme.sizes.small};

        > label {
            padding: ${theme.spacings.xsmall};
            position: relative;
            top: 0;
            left: ${theme.spacings.xsmall};
        }
    `}
    
`;