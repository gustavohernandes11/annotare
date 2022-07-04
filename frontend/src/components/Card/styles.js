import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        display: flex;
        flex-direction: column-reverse;
        background-color: ${theme.colors.backgroundTertiary};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        transition: ease-in-out 1s;
        min-height: 100px;
        max-height: 400px;
    `}
`;