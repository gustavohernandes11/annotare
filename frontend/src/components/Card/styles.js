import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme, color=theme.colors.secondary }) => css`
        display: flex;
        flex-direction: column-reverse;
        background-color: ${theme.colors.backgroundTertiary};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        transition: opacity ease-in-out 0.5s;
        min-height: 100px;
        max-height: 400px;
        box-shadow: 4px 2px 10px rgba(0,0,0, .10);
    `}
`;