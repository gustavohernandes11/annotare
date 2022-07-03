import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        display: grid;
        grid-template-rows: ${theme.spacings.xlarge} 1fr ${theme.spacings.xlarge};
        border: 1px solid ${theme.colors.border};
        background-color: ${theme.colors.backgroundTertiary};
        border-left: 2px solid ${color};
        color: ${theme.colors.primary};
        transition: ease-in-out 0.05s;
        border-radius: 5px;
        min-height: 100px;
        max-height: 400px;
    `}
`;