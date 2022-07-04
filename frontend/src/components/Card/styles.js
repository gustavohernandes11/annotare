import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        display: grid;
        grid-template-rows: ${theme.spacings.xlarge} 1fr ${theme.spacings.xlarge};
        background-color: ${theme.colors.backgroundTertiary};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        transition: ease-in-out 0.05s;
        min-height: 100px;
        max-height: 400px;


    `}
`;