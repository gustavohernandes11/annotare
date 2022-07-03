import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color = theme.colors.secondary }) => css`
        border: 1px solid ${theme.colors.border};
        border-left: 2px solid ${color};
        align-items: center;
        padding: ${theme.spacings.medium};
        color: ${theme.colors.primary};
        border-radius: 5px;
        margin-top: ${theme.spacings.xsmall};
        background-color: ${theme.colors.backgroundTertiary};

        :hover {
            cursor: pointer;
        }
    `}
    
`;